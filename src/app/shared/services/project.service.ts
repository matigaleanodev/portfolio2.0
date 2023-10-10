import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Project } from '@shared/models/project.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  _http = inject(HttpClient);
  _API_URL = environment.API_URL;

  save(project: Project): Observable<Project> {
    return this._http.post<Project>(`${this._API_URL}/project`, project).pipe(
      map((project) => {
        return project;
      })
    );
  }

  update(project: Project): Observable<Project> {
    return this._http
      .patch<Project>(`${this._API_URL}/project/${project.id}`, project)
      .pipe(
        map((project) => {
          return project;
        })
      );
  }

  delete(id: number): Observable<Project> {
    return this._http.delete<Project>(`${this._API_URL}/project/${id}`);
  }

  getAll(): Observable<Project[]> {
    return this._http.get<Project[]>(`${this._API_URL}/project`);
  }

  getOne(id: number): Observable<Project> {
    return this._http.get<Project>(`${this._API_URL}/project/${id}`);
  }
}
