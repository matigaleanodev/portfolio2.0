import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private storage = inject(StorageService);
  token = signal<string>('');

  async loadToken() {
    const token = await this.getToken();
    this.token.set(token ?? '');
  }

  private async getToken(): Promise<string> {
    const token = await this.storage.get('token');
    return token;
  }

  decodeToken(token: string) {
    const payload = token.split('.')[1];
    const decodedPayload = decodeURIComponent(
      atob(payload)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(decodedPayload);
  }

  async isValidLogin(): Promise<boolean> {
    const token = await this.storage.get('token');

    if (!token) {
      return false;
    }

    this.token.set(token);

    const tokenData = this.decodeToken(token);
    const exp = tokenData.exp;
    const expired = Date.now() > exp * 1000;

    if (expired) {
      return false;
    }

    return true;
  }
}
