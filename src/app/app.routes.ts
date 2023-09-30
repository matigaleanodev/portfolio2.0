import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const title = 'Matias Galeano';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    title: title + ' | Portfolio',
  },
  {
    path: 'about-me',
    loadComponent: () =>
      import('./pages/about-me/about-me.component').then(
        (c) => c.AboutMeComponent
      ),
    title: title + ' | Sobre Mi',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
    title: title + ' | Contacto',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (c) => c.ProjectsComponent
      ),
    title: title + ' | Proyectos',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
    title: title + ' | Contacto',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    title: title + ' | Dashboard',
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/home',
  },
];
