import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token: string;

  constructor() {
    const Token: string = sessionStorage.getItem('token') || '';
    this.token = Token;
  }

  validateToken(): boolean {
    const Token = this.token;

    if (!Token) {
      return false;
    }

    const payload = Token.split('.')[1];
    const decodedPayload = decodeURIComponent(
      atob(payload)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    if (
      JSON.parse(decodedPayload).name !==
      sessionStorage.getItem('apellidoYNombre')
    ) {
      return false;
    }

    if (
      JSON.parse(decodedPayload).nameid !== sessionStorage.getItem('idUsuario')
    ) {
      return false;
    }

    const exp = JSON.parse(decodedPayload).exp;
    return Date.now() < exp * 1000;
  }
}
