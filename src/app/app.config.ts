import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
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
import { provideToastr } from 'ngx-toastr';
import { requestInterceptor } from '@shared/interceptors/request.interceptor';
import { errorInterceptor } from '@shared/interceptors/error.interceptor';
import { firebaseProviders } from 'src/app/firebase';

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
    provideHttpClient(withInterceptors([requestInterceptor, errorInterceptor])),
    provideAnimations(),
    provideToastr({
      preventDuplicates: true,
    }),
    provideRouter(
      routes,
      inMemoryScrollingFeature,
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
    ),
    importProvidersFrom([HttpClientModule]),
    firebaseProviders,
  ],
};
