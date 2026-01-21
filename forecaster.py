import pandas as pd
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import seaborn as sns
import os
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

class Forecaster:
    def __init__(self, data, output_dir="output/forecasts"):
        self.data = data.copy()
        self.output_dir = output_dir
        os.makedirs(self.output_dir, exist_ok=True)
        self.performance_metrics = []
        self.feature_importance = {}
        self.models = {}

    def prepare_data(self):
        """
        Feature Engineering:
        1. Calculate System Losses
        2. Define Targets
        3. Create Features (Lags)
        """
        df = self.data.copy()

        # 1. Calculate System Losses (Supply - Demand)
        # Supply = Gen + Import
        # Demand = Sugar + Ethanol + Aux + Export
        # Losses = Supply - Demand
        # Note: 'Total_Internal_Cons_MWh' = Sugar + Ethanol + Aux (from Module 1)
        
        supply = df['Power_Generated_MWh'] + df['Grid_Import_MWh']
        demand = df['Total_Internal_Cons_MWh'] + df['Power_Exported_MWh']
        df['System_Losses_MWh'] = supply - demand
        
        # 2. Define Targets
        self.targets = [
            'Power_Generated_MWh', 
            'Total_Internal_Cons_MWh', 
            'Power_Exported_MWh', 
            'System_Losses_MWh'
        ]
        
        # 3. Create Features
        # Base input features (Operational Control Variables)
        self.base_features = ['Season_Flag', 'Bagasse_Used_MT', 'Steam_Generated_TPD']
        
        # Add Lag Features (Autoregressive)
        # We assume we want to predict t based on t's operational inputs and t-1's state
        for target in self.targets:
            df[f'Lag_1_{target}'] = df[target].shift(1)
        
        # Drop NaN caused by shift
        df = df.dropna()
        
        self.model_data = df
        print(f"  > Feature Engineering Complete. Data Shape: {self.model_data.shape}")

    def train_predict(self):
        """
        Trains models and generates forecasts.
        Split: 70% Train, 30% Test (Chronological)
        """
        print("Training Forecasting Models...")
        
        # Chronological Split
        n = len(self.model_data)
        train_size = int(n * 0.7)
        
        train_df = self.model_data.iloc[:train_size]
        test_df = self.model_data.iloc[train_size:]
        
        results = {}
        
        for target in self.targets:
            # Define predictors: Base Features + Lag of THIS target? 
            # Or Lags of ALL targets? 
            # Simple AR approach: Base Features + Lag_1 of Target
            features = self.base_features + [f'Lag_1_{target}']
            
            X_train = train_df[features]
            y_train = train_df[target]
            X_test = test_df[features]
            y_test = test_df[target]
            
            # --- MODEL 1: Linear Regression (Baseline) ---
            lr_model = LinearRegression()
            lr_model.fit(X_train, y_train)
            lr_pred = lr_model.predict(X_test)
            
            self._evaluate(target, "LinearRegression", y_test, lr_pred)
            
            # --- MODEL 2: Random Forest (Non-linear) ---
            rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
            rf_model.fit(X_train, y_train)
            rf_pred = rf_model.predict(X_test)
            
            # STORE MODEL FOR FUTURE PREDICTION
            self.models[target] = rf_model

            self._evaluate(target, "RandomForest", y_test, rf_pred)
            
            # Store Feature Importance for RF
            self.feature_importance[target] = pd.Series(
                rf_model.feature_importances_, index=features
            ).sort_values(ascending=False)
            
            # Store Predictions for Output
            # We'll attach predictions to the test dataframe
            target_results = test_df[['Day']].copy()
            target_results['Actual'] = y_test
            target_results['Forecast_LR'] = lr_pred
            target_results['Forecast_RF'] = rf_pred
            results[target] = target_results
            
            self._plot_forecast(target, y_test, lr_pred, rf_pred, test_df['Day'])
            self._plot_predicted_vs_actual(target, y_test, rf_pred, "RandomForest")

        self.forecast_results = results
        self._save_metrics()
        self._save_feature_importance()
        
    def predict_future(self, days=30):
        """
        Predicts the next N days recursively based on the last available data point.
        CRITICAL UPDATE: Retrains models on 100% of data before predicting future
        to ensure latest trends are captured.
        """
        print(f"\nGenerating {days}-Day Future Forecast (Full Data Training)...")
        
        # Start from the last row of the known data
        last_row = self.model_data.iloc[-1].copy()
        
        # We need to loop N times, updating "Lag" features each time
        future_rows = []
        current_input = last_row.copy()
        
        # Determine the last Day index to increment
        try:
            last_day_idx = float(last_row['Day'])
        except:
            last_day_idx = 0

        # Retrain models on FULL DATASET for maximum accuracy
        full_models = {}
        for target in self.targets:
            # defined features
            features = self.base_features + [f'Lag_1_{target}']
            
            # Full X and y
            X_full = self.model_data[features]
            y_full = self.model_data[target]
            
            # New Instance
            rf_full = RandomForestRegressor(n_estimators=100, random_state=42)
            rf_full.fit(X_full, y_full)
            full_models[target] = rf_full
            
        for i in range(1, days + 1):
            next_day_idx = last_day_idx + i
            row_dict = {'Day': f"Day {int(next_day_idx)}"} # Format for UI
            
            # Predict each target using recursive strategy
            step_predictions = {}
            
            for target in self.targets:
                model = full_models[target]
                
                # Construct features
                # 1. Base Features (Persistence assumption for controls)
                base_vals = current_input[self.base_features].values
                
                # 2. Lag Feature: 'Lag_1_{target}' is Yesterday's actual/predicted value
                lag_val = current_input[target]
                
                # Combine
                X_input = list(base_vals) + [lag_val]
                X_df = pd.DataFrame([X_input], columns=self.base_features + [f'Lag_1_{target}'])
                
                # Predict
                pred_val = model.predict(X_df)[0]
                step_predictions[target] = pred_val
                
            # Logic Update for next step:
            # The "Predicted" values of this step become the "Current Known" values for next step
            next_input = current_input.copy()
            # Update targets with new predictions
            for t, v in step_predictions.items():
                next_input[t] = v
                row_dict[t] = round(v, 2)
                
            # Update internal loop state
            current_input = next_input
            
            # Calculate Derived UI Fields for the row
            gen = row_dict.get('Power_Generated_MWh', 0)
            dem = row_dict.get('Total_Internal_Cons_MWh', 0)
            surplus = gen - dem
            
            row_dict['Internal_Demand_MWh'] = dem 
            row_dict['Power_Surplus_MWh'] = round(surplus, 2)
            
            # Risk Logic
            if surplus >= 160:
                row_dict['Risk_Level'] = 'LOW'
                row_dict['Operational_Reason'] = 'Sufficient generation buffer.'
            elif surplus >= 120:
                row_dict['Risk_Level'] = 'MEDIUM'
                row_dict['Operational_Reason'] = 'Standard operation.'
            else:
                row_dict['Risk_Level'] = 'HIGH'
                row_dict['Operational_Reason'] = 'Deficit likely.'
            
            future_rows.append(row_dict)
            
        future_df = pd.DataFrame(future_rows)
        print("  > Future Forecast Generated.")
        return future_df

    def _evaluate(self, target, model_name, y_true, y_pred):
        mae = mean_absolute_error(y_true, y_pred)
        rmse = np.sqrt(mean_squared_error(y_true, y_pred))
        r2 = r2_score(y_true, y_pred)
        
        self.performance_metrics.append({
            'Target': target,
            'Model': model_name,
            'MAE': round(mae, 4),
            'RMSE': round(rmse, 4),
            'R2': round(r2, 4)
        })

    def _plot_forecast(self, target, y_true, y_lr, y_rf, days):
        plt.figure(figsize=(10, 5))
        plt.plot(days, y_true, label='Actual', color='black', alpha=0.6)
        plt.plot(days, y_lr, label='Linear Regression', linestyle='--', color='blue', alpha=0.7)
        plt.plot(days, y_rf, label='Random Forest', linestyle=':', color='green', alpha=0.8)
        
        plt.title(f'Forecast: {target}')
        plt.xlabel('Day Index')
        plt.ylabel(target)
        plt.legend()
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, f'forecast_{target}.png'))
        plt.close()

    def _plot_predicted_vs_actual(self, target, y_true, y_pred, model_name):
        """
        Generates a scatter plot of Predicted vs Actual values.
        Used to show model accuracy and dataset density.
        """
        plt.figure(figsize=(8, 8))
        
        # Scatter Plot
        plt.scatter(y_true, y_pred, alpha=0.6, s=25, color='#3b82f6', label='Data Points')
        
        # Perfect Prediction Line (45 degree)
        min_val = min(min(y_true), min(y_pred))
        max_val = max(max(y_true), max(y_pred))
        plt.plot([min_val, max_val], [min_val, max_val], color='red', linestyle='--', label='Perfect Prediction')
        
        plt.title(f'Predicted vs Actual: {target} ({model_name})')
        plt.xlabel(f'Actual {target}')
        plt.ylabel(f'Predicted {target}')
        plt.legend()
        plt.grid(True, alpha=0.3, linestyle='--')
        
        # Add R2 Score annotation
        r2 = r2_score(y_true, y_pred)
        plt.text(0.05, 0.95, f'R² = {r2:.4f}', transform=plt.gca().transAxes, 
                 fontsize=12, verticalalignment='top', bbox=dict(boxstyle='round', facecolor='white', alpha=0.8))
        
        plt.savefig(os.path.join(self.output_dir, f'scatter_{model_name}_{target}.png'))
        plt.close()

    def _save_metrics(self):
        metrics_df = pd.DataFrame(self.performance_metrics)
        metrics_df.to_csv(os.path.join(self.output_dir, 'model_performance.csv'), index=False)
        print("\n=== MODEL PERFORMANCE SUMMARY ===")
        print(metrics_df.to_string())

    def _save_feature_importance(self):
        with open(os.path.join(self.output_dir, 'feature_importance.txt'), 'w') as f:
            for target, imp in self.feature_importance.items():
                f.write(f"--- {target} ---\n")
                f.write(imp.to_string())
                f.write("\n\n")

    def get_forecasts(self):
        return self.forecast_results
