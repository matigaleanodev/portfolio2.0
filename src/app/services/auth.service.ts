import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse, LoginUser } from '../models/user.model';
import { Observable, map } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { BYPASS_JW_TOKEN } from './request.interceptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.API_URL;
  private _http = inject(HttpClient);
  private _token = inject(TokenService);
  private _router = inject(Router);

  login(credentials: LoginUser): Observable<LoginResponse> {
    return this._http
      .post<LoginResponse>(`${this.API_URL}/users/login`, credentials, {
        context: new HttpContext().set(BYPASS_JW_TOKEN, true),
      })
      .pipe(
        map((res) => {
          this._token.setToken(res.access_token);
          return res;
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
