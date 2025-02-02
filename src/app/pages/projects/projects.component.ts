import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectsService } from '@shared/services/projects/projects.service';
import { IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { ProjectItemComponent } from './components/project-item/project-item.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonGrid, ProjectItemComponent],
})
export class ProjectsComponent {
  private readonly _service = inject(ProjectsService);
  readonly projects = toSignal(this._service.getAll());
}
