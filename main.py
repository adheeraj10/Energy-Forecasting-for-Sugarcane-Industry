import sys
from data_loader import DataLoader
from validator import Validator
from processor import Processor
from reporter import Reporter

# CONFIGURATION
SHEET_URL = "https://docs.google.com/spreadsheets/d/1pHUzHPhupuF2DSKFh5jdhYX2xoAStDKJSpiahG-w_aM/edit?usp=sharing"

def main():
    print("Starting Module 1: Data Ingestion & Structuring")
    
    # 1. Ingestion
    loader = DataLoader(SHEET_URL)
    raw_data = loader.load_all_data()
    
    # 2. Validation
    validator = Validator(raw_data)
    logs = validator.check_consistency()
    if logs:
        print("Validation Issues Found:", logs)
        
    # 2.5 Unit Normalization & Cleaning
    from cleaner import DataCleaner
    cleaner = DataCleaner(raw_data)
    cleaned_data, unit_map = cleaner.clean_all()
    
    # 3. Processing
    processor = Processor(cleaned_data)
    master_dataset = processor.process_data()
    
    # 4. Reporting (Module 1)
    reporter = Reporter(master_dataset, unit_map)
    reporter.generate_reports()

    # 5. Forecasting (Module 2)
    from forecaster import Forecaster
    print("\nStarting Module 2: Forecasting...")
    forecaster = Forecaster(master_dataset)
    forecaster.prepare_data()
    forecaster.train_predict()
    forecast_results = forecaster.get_forecasts()
    
    forecast_results = forecaster.get_forecasts()
    
    print("Module 2 Execution Completed.")

    # 6. Optimization (Module 3)
    from optimizer import EnergyOptimizer
    print("\nStarting Module 3: Energy Optimization...")
    # Pass cleaned_data as it contains the raw configuration tables (Integrated_Plant_Overview)
    optimizer = EnergyOptimizer(cleaned_data)
    optimizer.optimize_scenario(forecast_results)
    
    print("Module 3 Execution Completed.")

    # 7. P2P Trading (Module 4)
    from market_simulator import P2PMarket
    print("\nStarting Module 4: P2P Market Simulation...")
    # Using the results from Module 3 (Optimized Schedule)
    market = P2PMarket()
    market.simulate_trade(optimizer.optimization_results)
    
    print("Module 4 Execution Completed.")

if __name__ == "__main__":
    main()
