import { Component, OnInit } from '@angular/core';
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
    IonIcon,
    IonCardTitle,
    IonButtons,
    IonLabel,
    IonItem,
    IonList,
    IonCardContent,
    IonButton,
  ],
  templateUrl: './tools-card.component.html',
  styleUrls: ['./tools-card.component.scss'],
})
export class ToolsCardComponent implements OnInit {
  constructor() {
    addIcons({
      constructOutline,
    });
  }

  ngOnInit() {}

  tools = [
    {
      name: 'Visual Studio Code',
      icon: 'logoVisualstudio',
    },
    {
      name: 'Git',
      icon: 'logoGit',
    },

    {
      name: 'Postman',
      icon: 'logoPostman',
    },
    {
      name: 'Insomnia',
      icon: 'logoInsomnia',
    },
    {
      name: 'Docker',
      icon: 'logoDocker',
    },
  ];
}
