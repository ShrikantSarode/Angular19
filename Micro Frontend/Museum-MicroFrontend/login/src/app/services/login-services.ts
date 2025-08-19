import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/data-types';

@Injectable({
  providedIn: 'any',
})
export class LoginServices {
  constructor(private http: HttpClient) {}

  // signUp(data: any) {
  //   return this.http.post('http://localhost:9093/user/UserAdd', data);
  // }

  // signUp(data: any) {
  //   return this.http.post('http://localhost:9093/user/UserAdd', data, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //   });
  // }

  
signUp(user: Users): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:9093/user/UserAdd', user, { headers });
  }


  login(data: any) {
    return this.http.post('http://localhost:9093/user/', data);
  }
}
