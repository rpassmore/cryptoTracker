import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Currency } from '../../providers/currencies/currency';
import { CurrenciesProvider } from '../../providers/currencies/currenciesProvider';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  currencies: Currency[];
  selectedItem: any;
  REFRESH_HOURS: number = 1;
  
  constructor(private _currenciesProvider: CurrenciesProvider, public navCtrl: NavController) {
    this.currencies; /*= [{
      "id": "bitcoin", 
      "name": "Bitcoin", 
      "symbol": "BTC", 
      "rank": 1, 
      "price_usd": 11042.9, 
      "price_btc": 1.0, 
      "volume_usd_24h": 6747800000.0, 
      "market_cap_usd": 184580693138, 
      "available_supply": 16714875.0, 
      "total_supply": 16714875.0, 
      "max_supply": 21000000.0, 
      "percent_change_1h":-2.14, 
      "percent_change_24h": 8.07, 
      "percent_change_7d": 29.87, 
      "last_updated": 1512215353
  }, 
  {
      "id": "ethereum", 
      "name": "Ethereum", 
      "symbol": "ETH", 
      "rank":2, 
      "price_usd": 462.905, 
      "price_btc": 0.0426808, 
      "volume_usd_24h": 1278930000.0, 
      "market_cap_usd": 44478777970.0, 
      "available_supply": 96086190.0, 
      "total_supply": 96086190.0, 
      "max_supply": null, 
      "percent_change_1h": -2.2, 
      "percent_change_24h": 4.0, 
      "percent_change_7d": -1.42, 
      "last_updated": 1512215352
  }
];*/
  
  }

  public ngOnInit() {
    //setInterval(() => this.getCurrentCurrenciesData(), this.REFRESH_HOURS * 60 * 60 * 1000);

    this.getCurrentCurrenciesData();
  }


  private getCurrentCurrenciesData() {
    this._currenciesProvider.getCurrencies().subscribe(data => this.currencies = data);    
  } 

  public getIcon(symbol:String):String {
    return "../../assets/imgs/coinSymbols/" + symbol + ".png";
  }  

  public getPercentChangedColour(change:number):String {
    var result:String = "yellow";    
    if(change > 0) {
     result = "green";
    } else if(change < 0) {
     result = "red";
    }
    return result;
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getCurrentCurrenciesData();   
    setTimeout(() => {
         
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    //this.navCtrl.push(ListPage, {
    //  item: item
    //});
  }
}
