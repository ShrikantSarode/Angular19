import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDto } from '../models/order-dto';

@Injectable({
  providedIn: 'any',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  savedOrder(data: any) {
    return this.http.post('http://localhost:9094/orders/savedOrder'.trim(), data);

  }
}
