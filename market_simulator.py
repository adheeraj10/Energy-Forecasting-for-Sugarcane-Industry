import pandas as pd
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import os

class Peer:
    def __init__(self, name, peer_type, avg_demand_mwh):
        self.name = name
        self.peer_type = peer_type
        self.avg_demand_mwh = avg_demand_mwh
    
    def get_demand(self, day_index):
        # Simulate daily variability (±20%)
        # Deterministic seed for reproducibility
        np.random.seed(int(day_index) + hash(self.name) % 1000)
        variation = np.random.uniform(0.8, 1.2)
        return self.avg_demand_mwh * variation

class P2PMarket:
    def __init__(self, output_dir="output/market"):
        self.output_dir = output_dir
        os.makedirs(self.output_dir, exist_ok=True)
        self.peers = self._initialize_peers()
        
        # Illustrative Pricing (Currency Units/MWh)
        # Grid Export = Baseline revenue
        # Grid Retail = What peers usually pay
        # P2P Price = Middle ground (Arbitrage benefit)
        self.GRID_EXPORT_PRICE = 50.0 
        self.P2P_TRADING_PRICE = 100.0 # 2x Export Price, but cheaper than Retail (e.g., 150)
        
    def _initialize_peers(self):
        # Defining a small set of local consumers
        return [
            Peer("Ind_Unit_A", "Industrial", 40.0),   # Consistent medium demand
            Peer("Comm_Complex_B", "Commercial", 25.0), # Daytime demand
            Peer("Agri_Proc_C", "Agriculture", 15.0)    # Variable demand
        ]

    def simulate_trade(self, optimization_results):
        print("Running P2P Market Simulation...")
        
        results = []
        df = optimization_results.copy()
        
        for idx, row in df.iterrows():
            day = row['Day']
            # Supply comes from "Optimized Export" (P_export_Opt)
            # Ensure we handle potential NaNs or small floats
            supply = max(0.0, row.get('P_export_Opt', 0.0))
            
            daily_res = self._allocate_day(day, supply)
            results.append(daily_res)
            
        self.market_results = pd.DataFrame(results)
        self._save_results()
        self._plot_results()
        
    def _allocate_day(self, day, supply):
        """
        Allocates available supply to peers based on priority order.
        Any remainder is sold to the Grid.
        """
        remaining_supply = supply
        allocations = {}
        total_demand = 0
        total_allocated_p2p = 0
        
        # Priority Allocation Logic:
        # We iterate through peers and fill their demand if supply exists.
        for peer in self.peers:
            demand = peer.get_demand(day)
            total_demand += demand
            
            allocated_to_peer = min(demand, remaining_supply)
            allocations[f"{peer.name}_MWh"] = allocated_to_peer
            
            remaining_supply -= allocated_to_peer
            total_allocated_p2p += allocated_to_peer
            
        # Remaining supply goes to Grid
        sold_to_grid = remaining_supply
        
        # Financial Calculations
        # Strategy A: All Export to Grid (Baseline Module 3 revenue potential)
        revenue_grid_only = supply * self.GRID_EXPORT_PRICE
        
        # Strategy B: P2P Trading
        # Revenue = (P2P Volume * P2P Price) + (Grid Volume * Grid Export Price)
        revenue_p2p_model = (total_allocated_p2p * self.P2P_TRADING_PRICE) + (sold_to_grid * self.GRID_EXPORT_PRICE)
        
        record = {
            'Day': day,
            'Total_Supply_MWh': supply,
            'Total_Peer_Demand_MWh': total_demand,
            'P2P_Volume_MWh': total_allocated_p2p,
            'Grid_Export_Volume_MWh': sold_to_grid,
            'Revenue_GridOnly': revenue_grid_only,
            'Revenue_P2P': revenue_p2p_model,
            'Revenue_Uplift': revenue_p2p_model - revenue_grid_only
        }
        record.update(allocations)
        return record

    def _save_results(self):
        # Save CSV
        self.market_results.to_csv(os.path.join(self.output_dir, 'p2p_market_log.csv'), index=False)
        
        # Summary Report
        total_supply = self.market_results['Total_Supply_MWh'].sum()
        total_p2p_vol = self.market_results['P2P_Volume_MWh'].sum()
        total_uplift = self.market_results['Revenue_Uplift'].sum()
        
        summary = {
            'Metric': ['Total Optimized Supply', 'P2P Traded Volume', 'Grid Export Volume', 'Total Revenue Uplift'],
            'Value': [total_supply, total_p2p_vol, total_supply - total_p2p_vol, total_uplift],
            'Unit': ['MWh', 'MWh', 'MWh', 'Currency Units']
        }
        pd.DataFrame(summary).to_csv(os.path.join(self.output_dir, 'market_summary.csv'), index=False)
        
        print("\n=== P2P MARKET SUMMARY ===")
        print(pd.DataFrame(summary).to_string())

    def _plot_results(self):
        df = self.market_results
        
        # 1. Volume Stacked Plot
        plt.figure(figsize=(10, 5))
        plt.stackplot(df['Day'], df['P2P_Volume_MWh'], df['Grid_Export_Volume_MWh'], 
                      labels=['Traded P2P', 'Sold to Grid'], alpha=0.7, colors=['#2ca02c', '#d62728'])
        plt.title('Energy Allocation: P2P vs Grid Export')
        plt.xlabel('Day')
        plt.ylabel('MWh')
        # Add legend outside if crowded, but upper left usually fine
        plt.legend(loc='upper left')
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'p2p_allocation.png'))
        plt.close()
        
        # 2. Revenue Comparison
        plt.figure(figsize=(10, 5))
        plt.plot(df['Day'], df['Revenue_GridOnly'], label='Revenue (Pure Grid Export)', linestyle='--', color='gray')
        plt.plot(df['Day'], df['Revenue_P2P'], label='Revenue (With P2P)', color='blue')
        plt.fill_between(df['Day'], df['Revenue_GridOnly'], df['Revenue_P2P'], color='blue', alpha=0.1, label='Economic Uplift')
        plt.title('Economic Value Creation: Grid vs P2P Trading')
        plt.xlabel('Day')
        plt.ylabel('Revenue (Currency Units)')
        plt.legend()
        plt.grid(True, alpha=0.3)
        plt.savefig(os.path.join(self.output_dir, 'p2p_revenue.png'))
        plt.close()
