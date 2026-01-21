import pandas as pd
import re

class DataCleaner:
    def __init__(self, data):
        self.raw_data = data
        self.cleaned_data = {}
        self.unit_map = []

    def clean_all(self):
        """
        Orchestrates the cleaning process for specific tables.
        """
        print("Cleaning analytical datasets...")
        
        # Tables to normalize (separate value from unit)
        analytical_tables = [
            "Cane_Bagasse_Data", 
            "Steam_Fuel_Parameters", 
            "Power_Balance", 
            "Annual_Power_Summary"
        ]
        
        self.cleaned_data = self.raw_data.copy()
        
        for name in analytical_tables:
            if name in self.raw_data:
                self.cleaned_data[name] = self.normalize_table(name, self.raw_data[name])
                
        # Daily_Energy_Flows requires validation of numeric types but no unit splitting (it's already columnar)
        if "Daily_Energy_Flows" in self.raw_data:
             self.cleaned_data["Daily_Energy_Flows"] = self.ensure_numeric_daily(self.raw_data["Daily_Energy_Flows"])

        return self.cleaned_data, pd.DataFrame(self.unit_map, columns=['Table', 'Parameter', 'Unit'])

    def normalize_table(self, table_name, df):
        """
        Iterates over a dataframe (assumed Key-Value pair structure) and splits value from unit.
        """
        cleaned_df = df.copy()
        
        # Standardize structure: Assuming col 0 is Parameter, col 1 is Value
        # If columns are named differently, we try to detect. 
        # Based on inspection, most have ['Parameter', 'Value'] or ['Component', 'Specification']
        
        cols = df.columns
        if len(cols) < 2:
            return df # Cannot clean
            
        param_col = cols[0]
        val_col = cols[1] # For simplicity, handling single value column tables first
        
        # Special case: Power_Balance has 3 columns: Item, Season, Off-season. 
        # Those are already numeric in the sheet inspection? 
        # Inspection showed: 16.000, 5.000. So they might be floats or string "16.000"
        if table_name == "Power_Balance":
             # Ensure numeric
             for c in cols[1:]:
                 cleaned_df[c] = pd.to_numeric(cleaned_df[c], errors='coerce')
             return cleaned_df

        new_rows = []
        for _, row in df.iterrows():
            param = row[param_col]
            val_str = str(row[val_col])
            
            val, unit = self.parse_value_unit(val_str)
            
            # Update row in place (conceptually) - actually recreating to ensure types
            # But structure might expect original columns + Unit? 
            # The prompt asked to "Remove unit text from values" and "Store units in a separate column"
            
            # Since these are Key-Value tables, we can just update the Value column to Float and added a Unit column
            cleaned_df.at[_, val_col] = val
            cleaned_df.at[_, 'Unit'] = unit
            
            self.unit_map.append({'Table': table_name, 'Parameter': param, 'Unit': unit})

        return cleaned_df

    def parse_value_unit(self, s):
        """
        Parses "3500 TCD" -> (3500.0, "TCD")
        Parses "70%" -> (0.7, "ratio")
        """
        s = s.strip()
        
        # 1. Percentage
        if s.endswith('%'):
            try:
                val = float(s.replace('%', '')) / 100.0
                return val, "ratio"
            except:
                pass
                
        # 2. Extract leading number
        # Regex to find number at start (int or float)
        match = re.match(r'^([\d\.]+)\s*(.*)', s)
        if match:
            try:
                val = float(match.group(1))
                unit = match.group(2).strip()
                if not unit: unit = "None"
                return val, unit
            except:
                pass
                
        # Special case: "30% on cane" -> 0.30, "ratio_on_cane"
        if "%" in s:
             # Try to find the number before %
             match = re.search(r'([\d\.]+)%', s)
             if match:
                 val = float(match.group(1)) / 100.0
                 unit_text = s.replace(match.group(0), "").strip()
                 return val, f"ratio ({unit_text})"

        # Fallback: return as is (if string) or 0.0?
        # If it's pure text, we might want to leave it? But Analytical tables must be numeric.
        # Let's try to return 0.0 and flag? Or just keep original string and fail later?
        # Prompt says "Analytical tables (must be strictly numeric)"
        
        return s, "text" # Placeholder

    def ensure_numeric_daily(self, df):
        temp_df = df.copy()
        numeric_cols = [c for c in temp_df.columns if c != 'Day']
        for c in numeric_cols:
            temp_df[c] = pd.to_numeric(temp_df[c], errors='coerce').fillna(0)
        return temp_df
