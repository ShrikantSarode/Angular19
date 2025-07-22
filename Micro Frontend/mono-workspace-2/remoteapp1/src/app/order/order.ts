import { Component } from '@angular/core';
import { OrderService } from '../service/order-service';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  products: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.list();
  }

  list(){
    this.orderService.productList().subscribe((data) => {
      console.log(data);
      
      this.products = data;
      console.log(this.products);
      
    });
  }
}
