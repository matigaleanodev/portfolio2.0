import { Routes } from '@angular/router';

const title = 'Matias Galeano';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    title: title + ' | Portfolio',
    data: { animation: 'slideInY' },
  },
  {
    path: 'about-me',
    loadComponent: () =>
      import('./pages/about-me/about-me.component').then(
        (c) => c.AboutMeComponent
      ),
    title: title + ' | Sobre Mi',
    data: { animation: 'slideInY' },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
    title: title + ' | Contacto',
    data: { animation: 'slideInY' },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (c) => c.ProjectsComponent
      ),
    title: title + ' | Proyectos',
    data: { animation: 'slideInY' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/home',
  },
];
