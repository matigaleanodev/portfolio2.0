import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, delay, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private API_URL = environment.API_URL;
  private _http = inject(HttpClient);

  loading$ = new BehaviorSubject<boolean>(true);
  loaded$ = new BehaviorSubject<boolean>(false);

  get Loading$() {
    return this.loading$.asObservable();
  }
  get Loaded$() {
    return this.loaded$.asObservable();
  }

  onInitApi() {
    return this._http.get(this.API_URL + '/profile').pipe(
      delay(300),
      map((response: any) => {
        this.loading$.next(false);
        this.loaded$.next(true);
        return response.message;
      })
    );
  }
}
