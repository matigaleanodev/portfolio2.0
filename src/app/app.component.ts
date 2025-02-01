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
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonFab,
  IonFabList,
  IonFabButton,
} from '@ionic/angular/standalone';

import { Platform } from '@ionic/angular';
import { defineCustomElement as defineLoading } from '@ionic/core/components/ion-loading';
import { defineCustomElement as defineModal } from '@ionic/core/components/ion-modal';
import { defineCustomElement as defineNav } from '@ionic/core/components/ion-nav';
import { ThemeService } from '@shared/services/theme/theme.service';
import { TokenService } from '@shared/services/token/token.service';
import { DatePipe, NgClass } from '@angular/common';
import { particles } from '@shared/animations/particles.animation';
import { Container, Engine } from '@tsparticles/engine';
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
import { MenuPipe } from '@shared/pipes/menu.pipe';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonFabButton,
    IonFabList,
    IonFab,
    IonLabel,
    IonTabButton,
    IonTabBar,
    IonTabs,
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
    MenuPipe,
  ],
})
export class AppComponent implements OnInit {
  private _theme = inject(ThemeService);
  private _token = inject(TokenService);
  private _particles = inject(NgParticlesService);
  private platform = inject(Platform);

  private readonly screenWidth = signal(window.innerWidth);
  private readonly isNative = signal(this.platform.is('capacitor'));

  readonly date = new Date();
  readonly title = 'Matias Galeano';
  readonly id = 'tsparticles';
  readonly particlesOptions = signal(particles);
  readonly menuItems = MenuItems;
  readonly useTabs = computed(
    () => this.isNative() || this.screenWidth() <= 768
  );

  readonly currentTheme = computed(() => this._theme.currentTheme());

  constructor(private router: Router, private nav: NavController) {
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
      //await loadFull(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  @HostListener('window:resize')
  private updateScreenWidth = () => {
    this.screenWidth.set(window.innerWidth);
    if (this.useTabs()) {
      const currentUrl = this.router.url;
      console.log(currentUrl);
      this.nav.navigateRoot(this.router.url);
    }
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
