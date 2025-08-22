import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/datatypes';

@Injectable({
  providedIn: 'any',
})
export class UserServices {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:9094/orders';

  getOrdersByUserId(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/user/${userId}`);
  }

  signUp(user: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:9093/auth/signup', user, {
      headers,
    });
  }

  login(data: any) {
    return this.http.post('http://localhost:9093/auth/login', data);
  }
}
