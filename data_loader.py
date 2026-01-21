import pandas as pd
import requests
import io

class DataLoader:
    def __init__(self, sheet_url):
        self.sheet_url = sheet_url
        self.sheets = {}

    def _get_csv_export_url(self, sheet_id, gid):
        return f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&gid={gid}"

    def extract_sheet_id(self):
        # Allow simple logic to extract ID from URL
        # Assumption: URL is like https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit...
        try:
            start = self.sheet_url.find('/d/') + 3
            end = self.sheet_url.find('/', start)
            if end == -1:
                return self.sheet_url[start:]
            return self.sheet_url[start:end]
        except Exception as e:
            raise ValueError(f"Could not extract Sheet ID from URL: {self.sheet_url}")

    def load_sheet(self, sheet_name, gid):
        """
        Loads a specific sheet by GID using the CSV export URL.
        """
        export_url = self._get_csv_export_url(self.sheet_id, gid)
        print(f"Loading {sheet_name} (GID: {gid})...")
        try:
            # pandas can read directly from URL
            df = pd.read_csv(export_url)
            return df
        except Exception as e:
            print(f"Error loading {sheet_name}: {e}")
            return pd.DataFrame()

    def load_all_data(self):
        """
        Loads all required sheets using known GIDs.
        """
        self.sheet_id = self.extract_sheet_id()
        
        # Mapping of Sheet Name -> GID (Extracted via Browser Tool)
        sheet_gids = {
            "Integrated_Plant_Overview": "1998299020",
            "Boiler_Turbine_Data": "1259085303",
            "Cane_Bagasse_Data": "143405306",
            "Steam_Fuel_Parameters": "579418586",
            "Power_Balance": "21867910",
            "Annual_Power_Summary": "1044698464",
            "Ethanol_Plant_Energy": "551214229",
            "Daily_Energy_Flows": "1878794242",
            "Forecasted_7day_plan": "00000000"
        }

        self.data = {}
        for name, gid in sheet_gids.items():
            self.data[name] = self.load_sheet(name, gid)
            print(f"  > Loaded {name}: {self.data[name].shape}")
            
        return self.data
