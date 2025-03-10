import {
  Component,
  computed,
  effect,
  HostListener,
  inject,
  OnInit,
  signal,
} from '@angular/core';
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
  IonIcon,
  IonFab,
  IonFabList,
  IonFabButton,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';

import { defineCustomElement as defineLoading } from '@ionic/core/components/ion-loading';
import { defineCustomElement as defineModal } from '@ionic/core/components/ion-modal';
import { defineCustomElement as defineNav } from '@ionic/core/components/ion-nav';
import { ThemeService } from '@shared/services/theme/theme.service';
import { TokenService } from '@shared/services/token/token.service';
import { DatePipe } from '@angular/common';
import { particles } from '@shared/animations/particles.animation';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { MenuItems } from '@shared/components/menu/menu';
import { addIcons } from 'ionicons';
import {
  clipboardOutline,
  contrast,
  laptopOutline,
  mail,
  moon,
  person,
  phonePortraitOutline,
  sunny,
} from 'ionicons/icons';
import { ApiService } from '@shared/services/api/api.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonMenuButton,
    IonButtons,
    IonFabButton,
    IonFabList,
    IonFab,
    IonIcon,
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
    MenuComponent,
  ],
})
export class AppComponent implements OnInit {
  private _api = inject(ApiService);
  private _theme = inject(ThemeService);
  private _token = inject(TokenService);
  private _particles = inject(NgParticlesService);

  private readonly screenWidth = signal(window.innerWidth);
  private readonly apiInit = toSignal(this._api.initApi());

  readonly date = new Date();
  readonly title = 'Matias Galeano';
  readonly id = 'tsparticles';
  readonly particlesOptions = signal(particles);
  readonly menuItems = MenuItems;

  readonly currentTheme = computed(() => this._theme.currentTheme());

  constructor() {
    defineLoading();
    defineModal();
    defineNav();
    this._token.loadToken();
    addIcons({
      person,
      mail,
      laptopOutline,
      clipboardOutline,
      contrast,
      sunny,
      moon,
      phonePortraitOutline,
    });
    effect(() => {
      this.updateParticleColors();
    });
  }

  ngOnInit(): void {
    this._theme.initTheme();
  }

  private updateParticleColors(): void {
    const lightColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--ion-color-light')
      .trim();
    const darkColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--ion-color-dark')
      .trim();

    const theme = this.currentTheme();

    const isDarkTheme =
      theme === 'dark' ||
      (theme === 'default' && this._theme.colorScheme.matches);

    this.particlesOptions.set({
      ...particles,
      background: {
        color: {
          value: isDarkTheme ? '#03000d' : '#b6ccf2',
        },
      },
      particles: {
        ...particles.particles,
        color: {
          value: isDarkTheme ? lightColor : darkColor,
        },
      },
    });
    this._particles.init(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }

  @HostListener('window:resize')
  private updateScreenWidth = () => {
    this.screenWidth.set(window.innerWidth);
  };

  @HostListener('window:matchMedia', ['$event'])
  private onColorSchemeChange(event: MediaQueryListEvent): void {
    if (this._theme.currentTheme() === 'default') {
      this._theme.updateTheme(event.matches ? 'dark' : 'light');
      this.updateParticleColors();
    }
  }

  useDeviceTheme() {
    this._theme.useDeviceTheme();
  }

  setDark() {
    this._theme.setDarkTheme();
  }

  setLight() {
    this._theme.setLightTheme();
  }
}
