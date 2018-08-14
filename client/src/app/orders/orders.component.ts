import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService) {}

  ngOnInit() {
  }

  finalOrders = this.orderService.getOrders();
}
