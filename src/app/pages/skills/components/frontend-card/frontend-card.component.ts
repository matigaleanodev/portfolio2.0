import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonToolbar,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButtons,
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
export class FrontendCardComponent implements OnInit {
  constructor() {
    addIcons({
      logoChrome,
      chevronBack,
      chevronForward,
      starOutline,
      ellipsisHorizontal,
      refresh,
    });
  }

  ngOnInit() {}
  frondendSkills = [
    {
      name: 'JavaScript y Typescript',
      link: 'https://www.typescriptlang.org/',
      description:
        "Utilizo 'JavaScript y TypeScript' porque son lenguajes de programación muy poderosos y versátiles que permiten desarrollar aplicaciones dinámicas y escalables. TypeScript, al ser un superset de JavaScript, me ayuda a trabajar de manera más segura y estructurada.",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/TypeScript_Logo_2020.svg',
    },
    {
      name: 'Angular',
      link: 'https://angular.dev/',
      description:
        "Utilizo 'Angular' porque es un framework robusto y completo que me permite desarrollar aplicaciones de una sola página (SPA) de manera eficiente, con un enfoque en la reutilización de componentes, manejo de estados y optimización del rendimiento.",
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
    },
    {
      name: 'Ionic',
      link: 'https://ionicframework.com/',
      description:
        "Utilizo 'Ionic' porque es un framework ideal para desarrollar aplicaciones móviles híbridas, permitiendo compartir código entre plataformas como Android, iOS y la web, lo que optimiza el tiempo de desarrollo y el mantenimiento de las aplicaciones.",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/e5/Ionic_Logo.svg',
    },
  ];

  currentIndex: number = 0;

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.frondendSkills.length - 1) {
      this.currentIndex++;
    }
  }
}
