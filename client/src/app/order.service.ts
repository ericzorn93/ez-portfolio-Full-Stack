import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrders() {
    let orders = [];
    fetch('/api/orders')
      .then(data => data.json())
      .then(retrievedOrders => {
        orders.push(retrievedOrders);
        console.log(orders);
      })
      .catch(err => console.warn(err));
    return orders;
  }
}
