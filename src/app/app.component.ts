import {
  Component,
  computed,
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
import { MenuComponent } from '@shared/components/menu/menu.component';
import { MenuItems } from '@shared/components/menu/menu';
import { addIcons } from 'ionicons';
import {
  clipboardOutline,
  laptop,
  laptopOutline,
  mail,
  person,
} from 'ionicons/icons';
import { MenuPipe } from '@shared/pipes/menu.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
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
  readonly title = 'Matias Galeano -  Angular Stack Developer';
  readonly id = 'tsparticles';
  readonly particlesOptions = signal(particles);
  readonly menuItems = MenuItems;
  readonly useTabs = computed(
    () => this.isNative() || this.screenWidth() <= 768
  );

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
    });
  }

  ngOnInit(): void {
    this._theme.initTheme();
    this._particles.init(async (engine: Engine) => {
      console.log(engine);
      await loadFull(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  @HostListener('window:resize')
  private updateScreenWidth = () => {
    this.screenWidth.set(window.innerWidth);
  };
}
