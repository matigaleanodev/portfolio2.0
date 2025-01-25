import { inject, Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';
import { TokenService } from '../token/token.service';
import { HttpClient, HttpContext } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { BYPASS_JW_TOKEN } from 'src/app/interceptors/request.interceptor';
import { LoginResponse, LoginUser, User } from 'src/app/models/user.mode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.API_URL;
  private _http = inject(HttpClient);
  private _token = inject(TokenService);
  private _router = inject(Router);
  private _storage = inject(StorageService);
  login(credentials: LoginUser): Observable<User> {
    return this._http
      .post<LoginResponse>(`${this.API_URL}/users/login`, credentials, {
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
    sessionStorage.clear();
    this._router.navigate(['/home']);
  }

  get isLoggedIn() {
    return this._token.isValidLogin();
  }
}
