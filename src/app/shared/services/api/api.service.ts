import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = environment.API_URL;

  private _http = inject(HttpClient);

  initApi() {
    return this._http.get<any>(`${this.API_URL}/api/profile`).pipe(
      map((res) => {
        console.log('api init');
        return res;
      })
    );
  }
}
