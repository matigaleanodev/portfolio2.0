import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

const scrollConfig: InMemoryScrollingOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
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
