import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from "@angular/http";
// import "rxjs/add/operator/map";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

  getOrders() {
    this._http.get('/api/orders').subscribe(orders => orders);
  }
}
