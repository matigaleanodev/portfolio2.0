import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse, LoginUser, User } from '@shared/models/user.model';
import { Observable, map } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { BYPASS_JW_TOKEN } from '@shared/interceptors/request.interceptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.API_URL;
  private _http = inject(HttpClient);
  private _token = inject(TokenService);
  private _router = inject(Router);

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
          this._token.setToken(access_token);
          return tokenData.user;
        })
      );
  }

  logout() {
    sessionStorage.clear();
    this._router.navigate(['/home']);
  }

  get isLoggedIn() {
    return this._token.validateToken();
  }
}
