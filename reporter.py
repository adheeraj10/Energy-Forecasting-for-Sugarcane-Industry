import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
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
