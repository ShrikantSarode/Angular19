import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModule } from '../order/order-module';

@Injectable({
  providedIn: 'any',
})
export class OrderService {
  

  constructor(private http: HttpClient) {}

  productList() :Observable<any> {
    return this.http.get('http://localhost:3000/products');
  }
}
