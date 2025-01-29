import { NgStyle } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonToolbar,
  IonButtons,
  IonButton,
  IonFooter,
  IonTitle,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDown, chevronUp, terminalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-backend-card',
  standalone: true,
  imports: [
    IonText,
    IonTitle,
    IonFooter,
    IonButton,
    IonButtons,
    IonToolbar,
    IonIcon,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    NgStyle,
  ],
  templateUrl: './backend-card.component.html',
  styleUrls: ['./backend-card.component.scss'],
})
export class BackendCardComponent {
  backendSkills = signal([
    {
      name: 'Node.js',
      descripcion:
        'Lo utilizo por su eficiencia y escalabilidad en el desarrollo backend.',
      image: 'assets/logos/logo-nodejs.svg',
      link: 'https://nodejs.org/',
    },
    {
      name: 'NestJS',
      descripcion:
        'Lo prefiero por su arquitectura modular y estructurada sobre Node.js.',
      image: 'assets/logos/logo-nestjs.svg',
      link: 'https://nestjs.com/',
    },
    {
      name: 'Firebase',
      descripcion:
        'Ideal para desarrollo ágil con base de datos en tiempo real y servicios en la nube.',
      image: 'assets/logos/logo-firebase.svg',
      link: 'https://firebase.google.com/',
    },
    {
      name: 'MySQL',
      descripcion:
        'Lo utilizo por su fiabilidad y eficiencia en la gestión de bases de datos relacionales.',
      image: 'assets/logos/logo-mysql.svg',
      link: 'https://www.mysql.com/',
    },
    {
      name: 'PostgreSQL',
      descripcion:
        'Lo elijo por su robustez en consultas avanzadas y manejo de transacciones complejas.',
      image: 'assets/logos/logo-postgresql.svg',
      link: 'https://www.postgresql.org/',
    },
  ]);

  currentIndex = signal(0);
  isTransitioning = signal(false);
  totalItems = computed(() => this.backendSkills().length);

  constructor() {
    addIcons({
      chevronUp,
      chevronDown,
      terminalOutline,
    });
    effect(() => {
      const interval = setInterval(() => this.nextSlide(), 8000);
      return () => clearInterval(interval);
    });
  }

  nextSlide(): void {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    this.currentIndex.update((index) => (index + 1) % this.totalItems());

    setTimeout(() => {
      this.isTransitioning.set(false);
    }, 500);
  }

  prevSlide(): void {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    this.currentIndex.update((index) =>
      index === 0 ? this.totalItems() - 1 : index - 1
    );

    setTimeout(() => {
      this.isTransitioning.set(false);
    }, 500);
  }
}
