import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/datatypes';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'any',
})
export class UserServices {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:9094/orders';
  private baseUrlUser = 'http://localhost:9093/user';

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

  private tokenKey = 'token';

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserId(): number | null {
    const token = this.getToken();
    if (token) {
      const decoded = jwtDecode<{ userId: number }>(token);
      return decoded.userId ?? null;
    }
    return null;
  }
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrlUser}/${id}`);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrlUser}/all`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlUser}/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrlUser}/edit/${id}`, user);
  }

  getRoleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrlUser}/role/${id}`);
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9093/user/roles');
  }
}
