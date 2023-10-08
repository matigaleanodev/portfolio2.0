import { Injectable } from '@angular/core';
import { TokenData } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  setToken(token: string): void {
    const payload = token.split('.')[1];
    const tokenData = this.decodeToken(payload);

    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(tokenData.user));
  }

  validateToken(): boolean {
    const Token = sessionStorage.getItem('token');
    if (!Token) {
      return false;
    }

    const payload = Token.split('.')[1];
    const tokenData = this.decodeToken(payload);
    if (!tokenData) {
      return false;
    }
    const savedUser = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (savedUser.id !== tokenData.user.id) {
      return false;
    }

    const exp = tokenData.exp;
    return Date.now() < exp * 1000;
  }

  decodeToken(payload: string): TokenData {
    return JSON.parse(
      decodeURIComponent(
        atob(payload)
          .split('')
          .map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      )
    );
  }
}
