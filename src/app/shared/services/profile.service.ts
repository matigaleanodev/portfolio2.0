import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profile, ProfileDTO } from '@shared/models/profile.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private API_URL = environment.API_URL;
  private _http = inject(HttpClient);

  getProfile(id: number): Observable<Profile> {
    return this._http.get<ProfileDTO>(this.API_URL + '/profile/' + id).pipe(
      map((response: ProfileDTO) => {
        const { projects, softSkills, hardSkills, ...profile } = response;
        sessionStorage.setItem('profile', JSON.stringify(profile));
        sessionStorage.setItem('projects', JSON.stringify(projects));
        sessionStorage.setItem('softSkills', JSON.stringify(softSkills));
        sessionStorage.setItem('hardSkills', JSON.stringify(hardSkills));
        return profile;
      })
    );
  }

  editProfile(profile: Profile): Observable<Profile> {
    return this._http
      .patch<ProfileDTO>(this.API_URL + '/profile/' + profile.id, profile)
      .pipe(
        map((response: ProfileDTO) => {
          const { projects, softSkills, hardSkills, ...profile } = response;
          sessionStorage.setItem('profile', JSON.stringify(profile));
          sessionStorage.setItem('projects', JSON.stringify(projects));
          sessionStorage.setItem('softSkills', JSON.stringify(softSkills));
          sessionStorage.setItem('hardSkills', JSON.stringify(hardSkills));
          return profile;
        })
      );
  }
}
