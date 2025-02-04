import { inject, Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';
import { TokenService } from '../token/token.service';
import { HttpClient, HttpContext } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BYPASS_JW_TOKEN } from '@shared/interceptors/request.interceptor';
import { LoginUser, User, LoginResponse } from '@shared/models/user.mode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _token = inject(TokenService);
  private _router = inject(Router);
  private _storage = inject(StorageService);
  login(credentials: LoginUser): Observable<User> {
    return this._http
      .post<LoginResponse>(`api/users/login`, credentials, {
        context: new HttpContext().set(BYPASS_JW_TOKEN, true),
      })
      .pipe(
        map((res) => {
          const { access_token } = res;
          const payload = access_token.split('.')[1];
          const tokenData = this._token.decodeToken(payload);
          this._token.token.set(access_token);
          this._storage.set('token', access_token);
          return tokenData.user;
        })
      );
  }

  logout() {
    this._storage.removeAll();
    this._token.token.set('');
    this._router.navigate(['/home']);
  }

  get isLoggedIn() {
    return this._token.isValidLogin();
  }
}
