import { Component, inject, OnInit, signal } from '@angular/core';
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
import { Project } from '@shared/models/project.mdel';

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
  //readonly projects = toSignal(this._service.getAll());
  readonly projects = signal(projectos);
}

const projectos: Project[] = [
  {
    id: 7,
    name: 'Portfolio Personal',
    description:
      'Web App de portfolio personal desarrollado en Angular del lado del frontend y NestJs del lado del backend.',
    image: 'project_portfolio-min.png',
    frontUrl: 'https://github.com/matigaleanodev/portfolio2.0',
    backUrl: 'https://github.com/matigaleanodev/portfolio-backend2.0',
    demoUrl: 'https://matiasgaleano.com.ar/',
    createdAt: '2023-10-12T05:02:47.000Z',
  },
  {
    id: 8,
    name: 'Pokemon Memory Game',
    description:
      'Juego de memoria desarrollado en Angular con imagenes de pokeapi',
    image: 'project_pokememory-min.png',
    frontUrl: 'https://github.com/matigaleanodev/Pokemon-Memory',
    backUrl: null,
    demoUrl: 'https://pokememory.matiasgaleano.com.ar/',
    createdAt: '2023-10-12T20:48:03.000Z',
  },
  {
    id: 9,
    name: 'Recipe Food Tracker',
    description:
      'Aplicación de recetas de cocina con datos de la API de spoonacular y traducciones a travez de Azure Translate',
    image: 'project_foodtracker.png',
    frontUrl: 'https://github.com/matigaleanodev/cookingRecipes',
    backUrl: null,
    demoUrl: 'https://foodtracker.matiasgaleano.com.ar/',
    createdAt: '2023-10-12T20:52:02.000Z',
  },
  {
    id: 10,
    name: 'Sistema de Autenticacion',
    description:
      'Sistema de autenticación utilizando Firebase desarrollado en Angular',
    image: 'project_authapp.jpg',
    frontUrl: 'https://github.com/matigaleanodev/authentication-app',
    backUrl: null,
    demoUrl: 'https://auth-service-a3930.web.app/login',
    createdAt: '2023-10-12T20:54:57.000Z',
  },
];
