import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProducts(data: any) {
    return this.http.post('http://localhost:9091/api/addProduct', data,{responseType: 'text'});
  }

  getAlerts() {
    return this.http.get('http://localhost:9091/api/latest', {
      responseType: 'text',
    });
  }
}
