import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'any',
})
export class AuthService {
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
}
