import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectsService } from '@shared/services/projects/projects.service';
import {
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonTitle,
} from '@ionic/angular/standalone';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonGrid,
    ProjectItemComponent,
    UpperCasePipe,
  ],
})
export class ProjectsComponent {
  private readonly _service = inject(ProjectsService);
  readonly projects = toSignal(this._service.getAll());
}
