import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
  InMemoryScrollingOptions,
  InMemoryScrollingFeature,
  withInMemoryScrolling,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { routes } from './app.routes';
import { IonicStorageModule } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment.development';

const scrollConfig: InMemoryScrollingOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
};

// AOS.init({
//   easing: 'ease-out-back',
//   duration: 1500,
// });
// window.addEventListener('load', AOS.refresh);

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const AppConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(
      routes,
      inMemoryScrollingFeature,
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    importProvidersFrom([IonicStorageModule.forRoot()]),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
