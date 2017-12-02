export interface Currency {
      id: String;
      name: String;
      symbol: String;
      rank: number;
      price_usd: number;
      price_btc: number;
      volume_usd_24h: number;
      market_cap_usd: number;
      available_supply: number;
      total_supply: number;
      max_supply: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      last_updated: number;
  }