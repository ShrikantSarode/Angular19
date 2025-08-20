import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class UserServices {
  constructor(private http: HttpClient) {}
  signUp(user: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:9093/user/UserAdd', user, {
      headers,
    });
  }

  login(data: any) {
    return this.http.post('http://localhost:9093/user/', data);
  }
}
