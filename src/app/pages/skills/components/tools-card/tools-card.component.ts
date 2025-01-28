import { NgClass, NgStyle } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import {
  IonButton,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonCardTitle,
  IonIcon,
  IonCardHeader,
  IonCard,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { constructOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tools-card',
  standalone: true,
  imports: [
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonLabel,
    IonItem,
    IonList,
    IonIcon,
    IonButtons,
    IonCardTitle,
    NgStyle,
  ],
  templateUrl: './tools-card.component.html',
  styleUrls: ['./tools-card.component.scss'],
})
export class ToolsCardComponent implements OnInit {
  tools = signal([
    {
      name: 'Visual Studio Code',
      icon: 'logoVisualstudio',
      image: 'path_to_image/vscode.png',
      description: 'Editor de código fuente',
    },
    {
      name: 'Git',
      icon: 'logoGit',
      image: 'path_to_image/git.png',
      description: 'Sistema de control de versiones',
    },
    {
      name: 'Postman',
      icon: 'logoPostman',
      image: 'path_to_image/postman.png',
      description: 'Herramienta para probar APIs',
    },
    {
      name: 'Insomnia',
      icon: 'logoInsomnia',
      image: 'path_to_image/insomnia.png',
      description: 'Alternativa de Postman',
    },
    {
      name: 'Docker',
      icon: 'logoDocker',
      image: 'path_to_image/docker.png',
      description:
        'Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores',
    },
  ]);

  currentIndex = signal(0);

  constructor() {
    addIcons({
      constructOutline,
    });
    effect(() => {
      const interval = setInterval(() => this.nextSlide(), 3000);
      return () => clearInterval(interval);
    });
  }

  ngOnInit() {}

  prevSlide() {
    const newIndex =
      this.currentIndex() === 0
        ? this.tools().length - 1
        : this.currentIndex() - 1;
    this.currentIndex.set(newIndex);
  }

  nextSlide() {
    const newIndex =
      this.currentIndex() === this.tools().length - 1
        ? 0
        : this.currentIndex() + 1;
    this.currentIndex.set(newIndex);
  }
}
