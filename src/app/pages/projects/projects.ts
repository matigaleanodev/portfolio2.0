import { Project } from 'src/app/models/project.model';
import { Observable, of } from 'rxjs';

const ProjectList: Project[] = [
  {
    id: 56,
    name: 'Mi Portfolio Personal',
    description:
      'Forntend creado con Typescript en Angular 14, estilos con Sass y Bootstrap 5.2. Backend creado con Java en Spring Boot conectada a una base de datos MySQL.',
    date: '2022-08-03T00:00:00.000+00:00',
    image: 'portfolio_01.png',
    frontUrl: 'https://github.com/MatiGaleano/Portfolio-Frontend',
    backUrl: 'https://github.com/MatiGaleano/Portfolio-Backend',
    demoUrl: 'https://matiasgaleano.com.ar',
  },
  {
    id: 57,
    name: 'Pokemon Memory',
    description:
      'Juego de memoria con tematica de pokemon. Creado con Typescript en Angular 13, estilos CSS y Bootstrap. Imagenes de pokemon de pokeapi.co',
    date: '2022-05-02T00:00:00.000+00:00',
    image: 'pokememory_01.png',
    frontUrl: 'https://github.com/MatiGaleano/Pokemon-Memory',
    backUrl: '',
    demoUrl: 'https://matigaleano.github.io/Pokemon-Memory/',
  },
  {
    id: 98,
    name: 'Tasklist',
    description:
      'CRUD de Angular que guarda los datos generados en Localstorage',
    date: '2022-03-15T00:00:00.000+00:00',
    image: 'tasklist.jpg',
    frontUrl: 'https://github.com/MatiGaleano/TaskList',
    backUrl: '',
    demoUrl: 'https://matigaleano.github.io/TaskList/',
  },
  {
    id: 99,
    name: 'Authentication App',
    description:
      'Aplicación de autenticación hecha en Angular 14 con servicio de Firebase Authentication',
    date: '2022-08-13T00:00:00.000+00:00',
    image: 'authapp.jpg',
    frontUrl: 'https://github.com/MatiGaleano/authentication-app',
    backUrl: '',
    demoUrl: 'https://auth-service-a3930.web.app/',
  },
];

export const ProjectList$: Observable<Project[]> = of(ProjectList);
