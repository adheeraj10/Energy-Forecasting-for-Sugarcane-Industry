import pandas as pd
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import os
from scipy.optimize import linprog

class EnergyOptimizer:
    def __init__(self, config_data, output_dir="output/optimization"):
        self.config_data = config_data
        self.output_dir = output_dir
        os.makedirs(self.output_dir, exist_ok=True)
        self.constraints = self._extract_constraints()

    def _extract_constraints(self):
        """
        Parses configuration tables to find technical limits.
        """
        constraints = {}
        
        # 1. Turbine Capacity
        try:
            df = self.config_data.get("Integrated_Plant_Overview")
            if df is not None:
                row = df[df['Parameter'].str.contains("Co-generation Capacity", case=False, na=False)]
                if not row.empty:
                    val_str = str(row.iloc[0]['Value'])
                    # Clean string "16 MW" -> 16.0
                    import re
                    match = re.search(r'([\d\.]+)', val_str)
                    if match:
                         constraints['Turbine_Capacity_MW'] = float(match.group(1))
                    else:
                         constraints['Turbine_Capacity_MW'] = 16.0
                else:
                    constraints['Turbine_Capacity_MW'] = 16.0
        except Exception as e:
            print(f"Warning: Could not extract Turbine Capacity: {e}")
            constraints['Turbine_Capacity_MW'] = 16.0

        print(f"  > Constraints Extracted: {constraints}")
        return constraints

    def optimize_scenario(self, forecast_results):
        print("Running Energy Optimization (Linear Programming)...")
        
        gen_df = forecast_results['Power_Generated_MWh'][['Day', 'Forecast_LR']].rename(columns={'Forecast_LR': 'Gen_Forecast'})
        load_df = forecast_results['Total_Internal_Cons_MWh'][['Day', 'Forecast_LR']].rename(columns={'Forecast_LR': 'Load_Forecast'})
        loss_df = forecast_results['System_Losses_MWh'][['Day', 'Forecast_LR']].rename(columns={'Forecast_LR': 'Loss_Baseline'})
        # Also need Export Forecast for comparison/baseline truth
        export_df = forecast_results['Power_Exported_MWh'][['Day', 'Forecast_LR']].rename(columns={'Forecast_LR': 'Export_Forecast'})
        
        merged = gen_df.merge(load_df, on='Day').merge(loss_df, on='Day').merge(export_df, on='Day')
        
        # Debug: Check first row stats
        print("DEBUG: First forecast entry:")
        print(merged.iloc[0].to_string())
        
        opt_results = []
        for idx, row in merged.iterrows():
            res = self._optimize_day(row)
            opt_results.append(res)
            
        opt_df = pd.DataFrame(opt_results)
        self.optimization_results = pd.concat([merged, opt_df], axis=1)
        
        self._save_results()
        self._plot_results()

    def _optimize_day(self, row):
        """
        Solves LP for a single day.
        Variables: x = [P_internal, P_export, P_loss]
        Indices:   0           1         2
        Objective: Maximize P_export => Minimize -P_export
        c = [0, -1, 0]
        
        Constraints:
        1. Energy Balance (Eq): Internal + Export + Loss = Gen
        2. Internal Load Satisfaction (Eq): Internal = Load_Forecast (Strict)
        3. Capacity (Ineq): Internal + Export <= Turbine_Capacity * 24
        """
        gen = row['Gen_Forecast']
        load = row['Load_Forecast']
        capacity_mwh = self.constraints.get('Turbine_Capacity_MW', 16.0) * 24
        
        # Objective: Maximize Export
        c = [0, -1, 0]
        
        # Equality: 
        # 1. Sum = Gen
        # 2. Internal = Load
        A_eq = [
            [1, 1, 1], # Internal + Export + Loss = Gen
            [1, 0, 0]  # Internal = Load
        ]
        b_eq = [
            gen,
            load
        ]
        
        # Inequality: Internal + Export <= Capacity
        A_ub = [[1, 1, 0]]
        b_ub = [capacity_mwh]
        
        # Realistic Loss Floor Constraint: P_loss >= alpha * Baseline_Loss
        # Implemented via bounds
        min_loss = 0.7 * row['Loss_Baseline']
        
        bounds = [(0, None), (0, None), (min_loss, None)]
        
        res = linprog(c, A_ub=A_ub, b_ub=b_ub, A_eq=A_eq, b_eq=b_eq, bounds=bounds, method='highs')
        
        if res.success:
            return {
                'P_internal_Opt': res.x[0],
                'P_export_Opt': res.x[1],
                'P_loss_Opt': res.x[2],
                'Optimization_Status': 'Success'
            }
        else:
            return {
                'P_internal_Opt': load,
                'P_export_Opt': row['Export_Forecast'],
                'P_loss_Opt': row['Loss_Baseline'],
                'Optimization_Status': 'Failed'
            }

    def _save_results(self):
        self.optimization_results.to_csv(os.path.join(self.output_dir, 'optimized_schedule.csv'), index=False)
        
        # Calculate totals
        # Baseline Comparison: Use the Export Forecast from Module 2 as the baseline, NOT the calculated algebraic one
        # because slight model errors in Loss forecast might make algebraic sum weird?
        # Actually algebraic is physically consistent with the LP constraints.
        # But let's use the explicit 'Export_Forecast' for "Baseline" to be fair to the forecast model.
        
        total_export_base = self.optimization_results['Export_Forecast'].sum()
        total_loss_base = self.optimization_results['Loss_Baseline'].sum()
        
        total_export_opt = self.optimization_results['P_export_Opt'].sum()
        total_loss_opt = self.optimization_results['P_loss_Opt'].sum()
        
        summary = {
            'Metric': ['Total Export (MWh)', 'Total Losses (MWh)'],
            'Baseline': [total_export_base, total_loss_base],
            'Optimized': [total_export_opt, total_loss_opt],
            'Improvement': [total_export_opt - total_export_base, total_loss_base - total_loss_opt]
        }
        pd.DataFrame(summary).to_csv(os.path.join(self.output_dir, 'optimization_summary.csv'), index=False)
        
        print("\n=== OPTIMIZATION SUMMARY ===")
        print(pd.DataFrame(summary).to_string())

    def _plot_results(self):
        df = self.optimization_results
        
        # Export Comparison
        plt.figure(figsize=(10, 5))
        plt.plot(df['Day'], df['Export_Forecast'], label='Baseline Export (Forecast)', alpha=0.6)
        plt.plot(df['Day'], df['P_export_Opt'], label='Optimized Export', linestyle='--', alpha=0.8)
        plt.title('Export Optimization: Baseline vs Optimized')
        plt.xlabel('Day')
        plt.ylabel('MWh')
        plt.legend()
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'optimization_export.png'))
        plt.close()
        
        # Loss Comparison
        plt.figure(figsize=(10, 5))
        plt.plot(df['Day'], df['Loss_Baseline'], label='Baseline Loss (Forecast)', color='red', alpha=0.6)
        plt.plot(df['Day'], df['P_loss_Opt'], label='Optimized Loss', color='green', linestyle='--', alpha=0.8)
        plt.title('System Loss Reduction')
        plt.xlabel('Day')
        plt.ylabel('MWh')
        plt.legend()
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'optimization_loss.png'))
        plt.close()
