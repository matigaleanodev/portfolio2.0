import { Component, inject, OnInit, signal } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonMenu,
  IonToolbar,
  IonHeader,
  IonContent,
  IonTitle,
  IonFooter,
  IonText,
  IonImg,
} from '@ionic/angular/standalone';

import { Platform } from '@ionic/angular';
import { defineCustomElement as defineLoading } from '@ionic/core/components/ion-loading';
import { defineCustomElement as defineModal } from '@ionic/core/components/ion-modal';
import { defineCustomElement as defineNav } from '@ionic/core/components/ion-nav';
import { ThemeService } from '@shared/services/theme/theme.service';
import { TokenService } from '@shared/services/token/token.service';
import { DatePipe } from '@angular/common';
import { particles } from '@shared/animations/particles.animation';
import { Container, Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonImg,
    IonText,
    IonFooter,
    IonTitle,
    IonContent,
    IonHeader,
    IonToolbar,
    IonMenu,
    IonSplitPane,
    IonApp,
    IonRouterOutlet,
    DatePipe,
    NgxParticlesModule,
  ],
})
export class AppComponent implements OnInit {
  private _theme = inject(ThemeService);
  private _token = inject(TokenService);

  readonly date = new Date();
  readonly title = 'Matias Galeano -  Angular Stack Developer';
  id = 'tsparticles';
  particlesOptions = signal(particles);
  private readonly ngParticlesService = inject(NgParticlesService);

  constructor() {
    defineLoading();
    defineModal();
    defineNav();
    this._token.loadToken();
  }

  ngOnInit(): void {
    this._theme.initTheme();
    this.ngParticlesService.init(async (engine: Engine) => {
      console.log(engine);
      await loadFull(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
