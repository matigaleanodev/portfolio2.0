import { Routes } from '@angular/router';

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
    title: title + ' | About Me',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/home',
  },
];
