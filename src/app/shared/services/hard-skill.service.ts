import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CreateHardSkill, HardSkill } from '@shared/models/skills.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HardSkillService {
  _http = inject(HttpClient);
  _API_URL = environment.API_URL;

  save(skill: CreateHardSkill): Observable<HardSkill> {
    return this._http
      .post<HardSkill>(`${this._API_URL}/hard-skill`, skill)
      .pipe(
        map((skill) => {
          return skill;
        })
      );
  }

  update(skill: CreateHardSkill): Observable<HardSkill> {
    return this._http
      .patch<HardSkill>(`${this._API_URL}/hard-skill/${skill.id}`, skill)
      .pipe(
        map((skill) => {
          return skill;
        })
      );
  }

  delete(id: number): Observable<HardSkill> {
    return this._http.delete<HardSkill>(`${this._API_URL}/hard-skill/${id}`);
  }

  getAll(): Observable<HardSkill[]> {
    return this._http.get<HardSkill[]>(`${this._API_URL}/hard-skill`);
  }

  getOne(id: number): Observable<HardSkill> {
    return this._http.get<HardSkill>(`${this._API_URL}/hard-skill/${id}`);
  }
}
