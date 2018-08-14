import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import {OrderService} from "./order.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
