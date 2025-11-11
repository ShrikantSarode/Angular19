import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../Models/datatypes';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'any',
})
export class UserServices {
  private ordersUrl = 'http://localhost:9094/orders';
  private usersUrl = 'http://localhost:9093/user';
  private artCatalogUrl = 'http://localhost:9092/artCatalogue';

  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  // Orders API

  getOrdersByUserId(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.ordersUrl}/user/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  getOrderCount(): Observable<number> {
    return this.http.get<number>(`${this.ordersUrl}/count`).pipe(
      catchError(this.handleError)
    );
  }

  // Users API

  getUserCount(): Observable<number> {
    return this.http.get<number>(`${this.usersUrl}/count`).pipe(
      catchError(this.handleError)
    );
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.usersUrl}/all`).pipe(
      catchError(this.handleError)
    );
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.usersUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.usersUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.usersUrl}/edit/${id}`, userData).pipe(
      catchError(this.handleError)
    );
  }

  // Roles API

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.usersUrl}/roles`).pipe(
      catchError(this.handleError)
    );
  }

  getRoleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.usersUrl}/role/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Art Catalogue API

  getArtCount(): Observable<number> {
    return this.http.get<number>(`${this.artCatalogUrl}/count`).pipe(
      catchError(this.handleError)
    );
  }

  getCatalog(): Observable<any> {
    return this.http.get<any>(`${this.artCatalogUrl}/allArticles`).pipe(
      catchError(this.handleError)
    );
  }

  // Authentication APIs

  signUp(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:9093/auth/signup', userData, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  login(credentials: any): Observable<any> {
    return this.http.post('http://localhost:9093/auth/login', credentials).pipe(
      catchError(this.handleError)
    );
  }

  // Token Management

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserId(): number | null {
    const token = this.getToken();
    if (!token) return null;
    const decoded = jwtDecode<{ userId: number }>(token);
    return decoded.userId ?? null;
  }

  // Generic error handler for HTTP errors

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (errorResponse.error) {
      if (typeof errorResponse.error === 'string') {
        // Plain text error from backend
        errorMessage = errorResponse.error;
      } else if (errorResponse.error.message) {
        // Standard JSON error with message property
        errorMessage = errorResponse.error.message;
      } else if (typeof errorResponse.error === 'object') {
        // Validation errors or multiple errors in an object
        errorMessage = Object.values(errorResponse.error).join(' ');
      }
    }

    return throwError(errorMessage);
  }
}
