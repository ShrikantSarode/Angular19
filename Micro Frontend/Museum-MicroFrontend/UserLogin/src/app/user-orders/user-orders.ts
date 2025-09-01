import { Component, OnInit } from '@angular/core';
import { Order } from '../Models/datatypes';
import { UserServices } from '../services/user-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-orders',
  imports: [CommonModule],
  templateUrl: './user-orders.html',
  styleUrl: './user-orders.css',
})
export class UserOrders implements OnInit {
  constructor(private services: UserServices) {}

  userId = 1;

  orders: Order[] = [];

  // ngOnInit(): void {
  //   this.services.getOrdersByUserId(this.userId).subscribe({
  //     next: (data) => (this.orders = data),
  //     error: (err) => console.error('Error fetching orders:', err),
  //   });
  // }

  ngOnInit(): void {
    const userId = this.services.getUserId();

    if (userId !== null) {
      this.services.getOrdersByUserId(userId).subscribe({
        next: (data) => (this.orders = data),
        error: (err) => console.error('Error fetching orders:', err),
      });
    } else {
      console.error('User ID not found. Please log in again.');
    }
  }
}
