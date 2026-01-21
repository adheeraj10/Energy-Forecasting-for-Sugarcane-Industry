import pandas as pd

class Validator:
    def __init__(self, data):
        self.data = data
        self.validation_log = []

    def check_consistency(self):
        """
        Run all validation checks.
        """
        print("Running validation checks...")
        if "Daily_Energy_Flows" not in self.data:
            self.validation_log.append("CRITICAL: Daily_Energy_Flows sheet missing.")
            return self.validation_log

        df = self.data["Daily_Energy_Flows"]
        
        self.validate_units(df)
        self.validate_energy_balance(df)
        
        return self.validation_log

    def validate_energy_balance(self, df):
        """
        Check if Power Generated + Import == Loads + Export
        Gen + Import = Sugar + Ethanol + Aux + Export + Loss
        """
        supply = df['Power_Generated_MWh'] + df['Grid_Import_MWh']
        demand = df['Sugar_Load_MWh'] + df['Ethanol_Load_MWh'] + df['Aux_Load_MWh'] + df['Power_Exported_MWh']
        
        # Calculate discrepancies
        diff = supply - demand
        
        # Tolerance check (e.g., 0.1 MWh or just flag large deviations)
        # Note: We noticed a ~29 MWh gap in row 0. We will log this.
        mean_diff = diff.mean()
        max_diff = diff.max()
        
        print(f"  > Energy Balance Check: Mean Diff = {mean_diff:.2f} MWh, Max Diff = {max_diff:.2f} MWh")
        
        if abs(mean_diff) > 1.0:
            self.validation_log.append(f"WARNING: Significant average energy imbalance detected: {mean_diff:.2f} MWh/day (Gen > Cons). Possible losses or unaccounted load.")

    def validate_units(self, df):
        """
        Check for negative values where impossible.
        """
        numeric_cols = ['Bagasse_Used_MT', 'Steam_Generated_TPD', 'Power_Generated_MWh', 
                        'Sugar_Load_MWh', 'Ethanol_Load_MWh', 'Aux_Load_MWh']
        
        for col in numeric_cols:
            if col in df.columns:
                if (df[col] < 0).any():
                    self.validation_log.append(f"ERROR: Negative values found in {col}")
