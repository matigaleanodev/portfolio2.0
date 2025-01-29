import { NgClass, NgStyle } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import {
  IonButton,
  IonCardContent,
  IonList,
  IonItem,
  IonButtons,
  IonCardTitle,
  IonIcon,
  IonCardHeader,
  IonCard,
  IonToolbar,
  IonNote,
  IonText,
  IonTitle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { constructOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tools-card',
  standalone: true,
  imports: [
    IonTitle,
    IonText,
    IonNote,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonItem,
    IonList,
    IonIcon,
    IonButtons,
    IonCardTitle,
    NgStyle,
    NgClass,
  ],
  templateUrl: './tools-card.component.html',
  styleUrls: ['./tools-card.component.scss'],
})
export class ToolsCardComponent implements OnInit {
  tools = signal([
    {
      name: 'Visual Studio Code',
      icon: 'logoVisualstudio',
      image: 'assets/logos/logo-vscode.svg',
      description: 'Editor de código fuente',
    },
    {
      name: 'Git',
      icon: 'logoGit',
      image: 'assets/logos/logo-git.svg',
      description: 'Sistema de control de versiones',
    },
    {
      name: 'Postman',
      icon: 'logoPostman',
      image: 'assets/logos/logo-postman.svg',
      description: 'Herramienta para probar APIs',
    },
  ]);

  currentIndex = signal(0);

  constructor() {
    addIcons({
      constructOutline,
    });
    effect(() => {
      const interval = setInterval(() => this.nextSlide(), 8000);
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
