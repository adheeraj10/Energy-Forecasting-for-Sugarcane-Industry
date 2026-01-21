import pandas as pd

class Processor:
    def __init__(self, data):
        self.data = data
        self.master_dataset = None

    def process_data(self):
        """
        Constructs the master time-series dataset.
        """
        print("Processing data...")
        self.construct_master_dataset()
        return self.master_dataset

    def construct_master_dataset(self):
        """
        Merges daily flows with relevant parameters.
        """
        if "Daily_Energy_Flows" not in self.data:
            print("Error: Daily_Energy_Flows missing for processing.")
            return

        df = self.data["Daily_Energy_Flows"].copy()
        
        # 1. Clean data (ensure numeric types)
        numeric_cols = [c for c in df.columns if c != 'Day']
        for c in numeric_cols:
            df[c] = pd.to_numeric(df[c], errors='coerce').fillna(0)

        # 2. Add Derived Metrics
        # Net Export
        df['Net_Export_MWh'] = df['Power_Exported_MWh'] - df['Grid_Import_MWh']
        
        # Total Consumption
        df['Total_Internal_Cons_MWh'] = df['Sugar_Load_MWh'] + df['Ethanol_Load_MWh'] + df['Aux_Load_MWh']
        
        # Season Name
        df['Season_Name'] = df['Season_Flag'].apply(lambda x: 'Season' if x == 1 else 'Off-season')
        
        self.master_dataset = df
        print(f"  > Master Dataset Constructed: {self.master_dataset.shape}")
