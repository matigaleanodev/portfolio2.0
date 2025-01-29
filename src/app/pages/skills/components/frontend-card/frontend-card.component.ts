import { NgStyle } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonCardContent,
  IonCardTitle,
  IonToolbar,
  IonCardHeader,
  IonCard,
  IonText,
  IonTitle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
  logoChrome,
  refresh,
  starOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-frontend-card',
  standalone: true,
  imports: [
    IonTitle,
    IonText,
    IonButtons,
    IonButton,
    IonIcon,
    IonCardContent,
    IonCardTitle,
    IonToolbar,
    IonCardHeader,
    IonCard,
    NgStyle,
  ],
  templateUrl: './frontend-card.component.html',
  styleUrls: ['./frontend-card.component.scss'],
})
export class FrontendCardComponent {
  frontendSkills = signal([
    {
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
      description:
        "Uso 'JavaScript y TypeScript' por su versatilidad y escalabilidad. TypeScript mejora la seguridad y estructura del código.",
      image: 'assets/logos/logo-typescript.svg',
    },
    {
      name: 'Angular',
      link: 'https://angular.dev/',
      description:
        "Uso 'Angular' por su robustez y eficiencia en el desarrollo de SPA, con componentes reutilizables y alto rendimiento.",
      image:
        'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif',
    },
    {
      name: 'Ionic',
      link: 'https://ionicframework.com/',
      description:
        "Uso 'Ionic' para crear apps híbridas con un solo código, optimizando el desarrollo en Android, iOS y web.",
      image:
        'https://raw.githubusercontent.com/ionic-team/ionic-framework/main/.github/assets/logo.png',
    },
  ]);

  currentIndex = signal(0);
  isTransitioning = signal(false);
  totalItems = computed(() => this.frontendSkills().length);
  visibleIndex = computed(() => this.currentIndex() + 1);

  constructor() {
    addIcons({
      logoChrome,
      chevronBack,
      chevronForward,
      starOutline,
      ellipsisHorizontal,
      refresh,
    });

    effect(() => {
      const interval = setInterval(() => this.nextSlide(), 8000);
      return () => clearInterval(interval);
    });
  }

  nextSlide(): void {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    this.currentIndex.update((index) => index + 1);

    setTimeout(() => {
      if (this.currentIndex() >= this.totalItems()) {
        this.isTransitioning.set(false);
        this.currentIndex.set(0);
      } else {
        this.isTransitioning.set(false);
      }
    }, 500);
  }

  prevSlide(): void {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    this.currentIndex.update((index) => index - 1);

    setTimeout(() => {
      if (this.currentIndex() < 0) {
        this.isTransitioning.set(false);
        this.currentIndex.set(this.totalItems() - 1);
      } else {
        this.isTransitioning.set(false);
      }
    }, 500);
  }
}
