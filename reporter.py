import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import seaborn as sns
import os

class Reporter:
    def __init__(self, master_dataset, unit_map=None, output_dir="output"):
        self.dataset = master_dataset
        self.unit_map = unit_map
        self.output_dir = output_dir
        os.makedirs(self.output_dir, exist_ok=True)

    def generate_reports(self):
        print("Generating reports...")
        if self.dataset is None:
            print("No dataset to report on.")
            return

        # Save Unit Map
        if self.unit_map is not None:
             self.unit_map.to_csv(os.path.join(self.output_dir, 'parameter_unit_map.csv'), index=False)
            
        self.generate_summary_tables()
        self.generate_plots()
        self.generate_correlation_analysis()

    def generate_correlation_analysis(self):
        print("Generating correlation analysis...")
        
        # 1. Calculate System Losses (Strict Data Source Rule: Historical Data Only)
        # Loss = (Gen + Import) - (Demand + Export)
        df_analysis = self.dataset.copy()
        
        # Ensure imports/exports are numeric (handle None/NaN if any)
        for c in ['Power_Generated_MWh', 'Grid_Import_MWh', 'Total_Internal_Cons_MWh', 'Power_Exported_MWh']:
            df_analysis[c] = pd.to_numeric(df_analysis[c], errors='coerce').fillna(0)
            
        df_analysis['System_Losses_MWh'] = (
            (df_analysis['Power_Generated_MWh'] + df_analysis['Grid_Import_MWh']) - 
            (df_analysis['Total_Internal_Cons_MWh'] + df_analysis['Power_Exported_MWh'])
        )

        # 2. Select numeric operational parameters
        cols = [
            'Bagasse_Used_MT', 
            'Steam_Generated_TPD', 
            'Power_Generated_MWh', 
            'Total_Internal_Cons_MWh', 
            'Power_Exported_MWh', 
            'System_Losses_MWh',
            'Season_Flag' # Optional but numeric
        ]
        
        # Filter for validity
        valid_cols = [c for c in cols if c in df_analysis.columns]
        
        if len(valid_cols) < 2:
            print("Not enough columns for correlation analysis.")
            return

        corr_matrix = df_analysis[valid_cols].corr()
        
        # Save CSV
        corr_matrix.to_csv(os.path.join(self.output_dir, 'correlation_matrix.csv'))
        
        # Save Heatmap
        plt.figure(figsize=(10, 8))
        sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', fmt=".2f", linewidths=0.5, center=0)
        plt.title('Correlation Heatmap of Sugar Plant Operational Parameters')
        plt.tight_layout()
        output_path = os.path.join(self.output_dir, 'correlation_heatmap.png')
        plt.savefig(output_path)
        plt.close()
        print(f"  > Correlation Analysis Generated: {output_path}")

    def generate_nonlinear_insights(self):
        """
        Generates 4 Key Non-Linear Insights for the Data Insights Section.
        Strictly uses 220-day historical data.
        """
        print("Generating Non-Linear Data Insights...")
        df = self.dataset.copy()
        
        # Ensure System Losses is calculated if missing (logic reused)
        if 'System_Losses_MWh' not in df.columns:
             supply = df['Power_Generated_MWh'] + df['Grid_Import_MWh']
             demand = df['Total_Internal_Cons_MWh'] + df['Power_Exported_MWh']
             df['System_Losses_MWh'] = supply - demand
             
        print("  > Data Stats for Insights:", df[['Bagasse_Used_MT', 'Power_Generated_MWh']].nunique())

        # 1. INSIGHT: Fuel Dynamics (Bagasse vs Power) - Non-Linear
        plt.figure(figsize=(6, 5))
        # Fix: Line color visible on white, add jitter to show density
        sns.regplot(data=df, x='Bagasse_Used_MT', y='Power_Generated_MWh', 
                    order=2, x_jitter=15, y_jitter=5,
                    scatter_kws={'alpha':0.4, 'color':'#4ade80', 's':30}, 
                    line_kws={'color':'#166534', 'linewidth':2}) # Dark green line
        plt.title('Non-Linear Fuel Response')
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'insight_fuel.png'))
        plt.close()

        # 2. INSIGHT: Thermal Inefficiency (Steam vs Losses)
        plt.figure(figsize=(6, 5))
        sns.regplot(data=df, x='Steam_Generated_TPD', y='System_Losses_MWh', 
                    order=2, x_jitter=20, y_jitter=2,
                    scatter_kws={'alpha':0.4, 'color':'#f87171', 's':30}, 
                    line_kws={'color':'#991b1b', 'linewidth':2}) # Dark red line
        plt.title('Inefficiency Growth')
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'insight_loss.png'))
        plt.close()

        # 3. INSIGHT: Export Trade-off (Internal Demand vs Export)
        plt.figure(figsize=(6, 5))
        sns.regplot(data=df, x='Total_Internal_Cons_MWh', y='Power_Exported_MWh', 
                    x_jitter=5, y_jitter=5,
                    scatter_kws={'alpha':0.4, 'color':'#60a5fa', 's':30}, 
                    line_kws={'color':'#1e40af', 'linewidth':2}) # Dark blue line
        plt.title('Export Trade-off Curve')
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'insight_tradeoff.png'))
        plt.close()
        
        print(f"  > Data Insights Plots Saved to {self.output_dir}")

    def generate_summary_tables(self):
        # 1. Annual Summary
        summary = self.dataset[['Power_Generated_MWh', 'Power_Exported_MWh', 'Grid_Import_MWh', 'Bagasse_Used_MT']].sum()
        summary_df = pd.DataFrame(summary, columns=['Annual_Total'])
        
        # Season vs Off-season
        season_stats = self.dataset.groupby('Season_Name')[['Power_Generated_MWh', 'Power_Exported_MWh']].mean()
        
        print("\n=== ANNUAL SUMMARY ===")
        print(summary_df)
        print("\n=== SEASONAL AVERAGES (Daily MWh) ===")
        print(season_stats)
        
        # Save to CSV
        summary_df.to_csv(os.path.join(self.output_dir, 'annual_summary.csv'))
        season_stats.to_csv(os.path.join(self.output_dir, 'seasonal_stats.csv'))

    def generate_plots(self):
        # Time series of Generation vs Export
        plt.figure(figsize=(12, 6))
        plt.plot(self.dataset['Day'], self.dataset['Power_Generated_MWh'], label='Generation', alpha=0.8)
        plt.plot(self.dataset['Day'], self.dataset['Power_Exported_MWh'], label='Export', alpha=0.8, linestyle='--')
        plt.plot(self.dataset['Day'], self.dataset['Total_Internal_Cons_MWh'], label='Internal Cons', alpha=0.6)
        
        plt.title('Daily Power Flow: Generation vs Consumption vs Export')
        plt.xlabel('Day')
        plt.ylabel('Energy (MWh)')
        plt.legend()
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'daily_power_flow.png'))
        plt.close()
        
        # Scatter: Bagasse vs Power
        plt.figure(figsize=(8, 6))
        plt.scatter(self.dataset['Bagasse_Used_MT'], self.dataset['Power_Generated_MWh'], alpha=0.6, c=self.dataset['Season_Flag'], cmap='viridis')
        plt.title('Fuel Efficiency: Bagasse vs Power Generation')
        plt.xlabel('Bagasse Used (MT)')
        plt.ylabel('Power Generated (MWh)')
        plt.colorbar(label='Season Flag (1=Season)')
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'fuel_efficiency.png'))
        plt.close()
        
        print(f"Plots saved to {self.output_dir}/")
