import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CreateSoftSkill, SoftSkill } from '@shared/models/skills.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillService {
  _http = inject(HttpClient);
  _API_URL = environment.API_URL;

  save(skill: CreateSoftSkill): Observable<SoftSkill> {
    return this._http
      .post<SoftSkill>(`${this._API_URL}/soft-skill`, skill)
      .pipe(
        map((skill) => {
          return skill;
        })
      );
  }

  update(skill: CreateSoftSkill): Observable<SoftSkill> {
    return this._http
      .patch<SoftSkill>(`${this._API_URL}/soft-skill/${skill.id}`, skill)
      .pipe(
        map((skill) => {
          return skill;
        })
      );
  }

  delete(id: number): Observable<SoftSkill> {
    return this._http.delete<SoftSkill>(`${this._API_URL}/soft-skill/${id}`);
  }

  getAll(): Observable<SoftSkill[]> {
    return this._http.get<SoftSkill[]>(`${this._API_URL}/soft-skill`);
  }

  getOne(id: number): Observable<SoftSkill> {
    return this._http.get<SoftSkill>(`${this._API_URL}/soft-skill/${id}`);
  }
}
