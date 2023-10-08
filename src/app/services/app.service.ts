import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileDTO } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private API_URL = environment.API_URL;
  private _http = inject(HttpClient);

  _loading$ = new BehaviorSubject<boolean>(true);

  get Loading$() {
    return this._loading$.asObservable();
  }

  onInitApi(): Observable<ProfileDTO[]> {
    return this._http.get<ProfileDTO[]>(this.API_URL + '/profile').pipe(
      map((response: ProfileDTO[]) => {
        const { projects, softSkills, hardSkills, ...profile } = response[0];
        sessionStorage.setItem('profile', JSON.stringify(profile));
        sessionStorage.setItem('projects', JSON.stringify(projects));
        sessionStorage.setItem('softSkills', JSON.stringify(softSkills));
        sessionStorage.setItem('hardSkills', JSON.stringify(hardSkills));
        this._loading$.next(false);
        return response;
      })
    );
  }
}
