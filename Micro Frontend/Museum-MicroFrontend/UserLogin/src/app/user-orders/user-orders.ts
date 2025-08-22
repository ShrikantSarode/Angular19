import { Component, OnInit } from '@angular/core';
import { Order } from '../Models/datatypes';
import { UserServices } from '../services/user-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-orders',
  imports: [CommonModule],
  templateUrl: './user-orders.html',
  styleUrl: './user-orders.css'
})
export class UserOrders implements OnInit {

  
userId = 1; 
  orders: Order[] = [];

  constructor(private services: UserServices) {}

  ngOnInit(): void {
    this.services.getOrdersByUserId(this.userId).subscribe({
      next: (data) => (this.orders = data),
      error: (err) => console.error('Error fetching orders:', err),
    });
  }


}
