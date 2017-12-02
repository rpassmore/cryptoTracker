//import { HttpClient } from '@angular/common/http';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { Currency } from './currency';


/*
  Generated class for the CurrenciesProvider provider.

  These are called 'services' in Angular

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrenciesProvider {

  private baseUrl: string = 'https://api.coinmarketcap.com/v1/ticker/'  

  constructor(private http: Http) {
    console.log('Hello CurrenciesProvider Provider');
  }

  /**
 * 
 */
public getCurrencies(): Observable<Currency[]> {
  return this.http.get(`${this.baseUrl}`).map(res => res.json() as Currency[])
  .do(data => console.log('All: ' + JSON.stringify(data)))
  .catch(handleError);

  //return this.http.get(`${this.baseUrl}`)
  //.map((res: Response) => res.json().content as Currency[])
  //.do(data => console.log('All: ' + JSON.stringify(data)))
  //.catch(handleError);
}
}

// this could also be a private method of the component class
function handleError(error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Could not fetch currencies`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

