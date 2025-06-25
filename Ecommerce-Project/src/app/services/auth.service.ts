import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // isLoggedIn(): boolean {
  //   // Check if a token exists in localStorage
  //   return !!localStorage.getItem('token');
  // }

  // login(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  // logout(): void {
  //   localStorage.removeItem('token');
  // }
}
