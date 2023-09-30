import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse, LoginUser } from '../models/user.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.API_URL;
  private _http = inject(HttpClient);

  login(credentials: LoginUser): Observable<LoginResponse> {
    return this._http
      .post<LoginResponse>(`${this.API_URL}/users/login`, credentials)
      .pipe(
        map((res) => {
          console.log(res);
          return res;
        })
      );
  }
}
