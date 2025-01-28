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
      name: 'JavaScript y Typescript',
      link: 'https://www.typescriptlang.org/',
      description:
        "Utilizo 'JavaScript y TypeScript' porque son lenguajes de programación muy poderosos y versátiles que permiten desarrollar aplicaciones dinámicas y escalables. TypeScript, al ser un superset de JavaScript, me ayuda a trabajar de manera más segura y estructurada.",
      image: 'assets/logos/logo-typescript.svg',
    },
    {
      name: 'Angular',
      link: 'https://angular.dev/',
      description:
        "Utilizo 'Angular' porque es un framework robusto y completo que me permite desarrollar aplicaciones de una sola página (SPA) de manera eficiente, con un enfoque en la reutilización de componentes, manejo de estados y optimización del rendimiento.",
      image: 'assets/logos/logo-angular.svg',
    },
    {
      name: 'Ionic',
      link: 'https://ionicframework.com/',
      description:
        "Utilizo 'Ionic' porque es un framework ideal para desarrollar aplicaciones móviles híbridas, permitiendo compartir código entre plataformas como Android, iOS y la web, lo que optimiza el tiempo de desarrollo y el mantenimiento de las aplicaciones.",
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
      const interval = setInterval(() => this.nextSlide(), 3000);
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
