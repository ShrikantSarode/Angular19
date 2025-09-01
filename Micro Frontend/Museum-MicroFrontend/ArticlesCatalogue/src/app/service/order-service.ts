import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDto } from '../models/order-dto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'any',
})
export class OrderService {

  baseUrl = 'http://localhost:9094';
  constructor(private http: HttpClient) {}

  savedOrder(data: any) {
    return this.http.post('http://localhost:9094/orders/savedOrder'.trim(), data);

  }

  showOrder(data: any) {
    return this.http.get('http://localhost:9094/orders/all'.trim(), data);
  } 

  
getOrdersByUserId(userId: number): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(`${this.baseUrl}/user/${userId}`);
  }

}
