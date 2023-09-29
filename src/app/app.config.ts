import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import * as AOS from 'aos';

const scrollConfig: InMemoryScrollingOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
};

AOS.init({
  easing: 'ease-out-back',
  duration: 1500,
});
window.addEventListener('load', AOS.refresh);

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(
      routes,
      inMemoryScrollingFeature,
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
    ),
    importProvidersFrom([HttpClientModule]),
  ],
};
