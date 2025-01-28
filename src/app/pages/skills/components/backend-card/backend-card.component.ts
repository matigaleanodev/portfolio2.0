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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDown, chevronUp, terminalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-backend-card',
  standalone: true,
  imports: [
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
        'Utilizo Node.js porque es un entorno de ejecución de JavaScript que me permite desarrollar aplicaciones del lado del servidor de manera eficiente y escalable.',
      image: 'assets/logos/logo-nodejs.svg',
      link: 'https://nodejs.org/',
    },
    {
      name: 'NestJS',
      descripcion:
        'Utilizo NestJS porque es un framework de Node.js que me permite desarrollar aplicaciones del lado del servidor de manera estructurada y modular, siguiendo el patrón de arquitectura MVC.',
      image: 'assets/logos/logo-nestjs.svg',
      link: 'https://nestjs.com/',
    },
    {
      name: 'Firebase',
      descripcion:
        'Utilizo Firebase porque es una plataforma de desarrollo de aplicaciones móviles y web que me permite desarrollar aplicaciones de manera rápida y sencilla, con una base de datos en tiempo real y servicios de autenticación y almacenamiento en la nube.',
      image: 'assets/logos/logo-firebase.svg',
      link: 'https://firebase.google.com/',
    },
    {
      name: 'MySQL',
      descripcion:
        'Utilizo MySQL porque es un sistema de gestión de bases de datos relacional que me permite almacenar y gestionar datos de manera eficiente y segura.',
      image: 'assets/logos/logo-mysql.svg',
      link: 'https://www.mysql.com/',
    },
    {
      name: 'PostgreSQL',
      descripcion:
        'Utilizo PostgreSQL porque es un sistema de gestión de bases de datos relacional de código abierto que me permite almacenar y gestionar datos de manera eficiente y segura, con soporte para consultas complejas y transacciones.',
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
      const interval = setInterval(() => this.nextSlide(), 3000);
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
