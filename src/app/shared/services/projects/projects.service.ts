import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateProject, Project } from '@shared/models/project.mdel';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly _http = inject(HttpClient);

  save(project: CreateProject): Observable<Project> {
    return this._http.post<Project>(`api/project`, project).pipe(
      map((project) => {
        return project;
      })
    );
  }

  update(project: CreateProject): Observable<Project> {
    return this._http.patch<Project>(`api/project/${project.id}`, project).pipe(
      map((project) => {
        return project;
      })
    );
  }

  delete(id: number): Observable<Project> {
    return this._http.delete<Project>(`api/project/${id}`);
  }

  getAll(): Observable<Project[]> {
    return this._http.get<Project[]>(`api/project`);
  }

  getOne(id: number): Observable<Project> {
    return this._http.get<Project>(`api/project/${id}`);
  }
}
