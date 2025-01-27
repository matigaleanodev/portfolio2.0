import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonToolbar,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonProgressBar,
  IonIcon,
  IonButtons,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoChrome } from 'ionicons/icons';

@Component({
  selector: 'app-frontend-card',
  standalone: true,
  imports: [
    IonButtons,
    IonIcon,
    IonProgressBar,
    IonLabel,
    IonItem,
    IonList,
    IonCardContent,
    IonCardTitle,
    IonToolbar,
    IonCardHeader,
    IonCard,
  ],
  templateUrl: './frontend-card.component.html',
  styleUrls: ['./frontend-card.component.scss'],
})
export class FrontendCardComponent implements OnInit {
  constructor() {
    addIcons({
      logoChrome,
    });
  }

  ngOnInit() {}

  frondendSkills = [
    {
      name: 'HTML',
      value: 0.9,
    },
    {
      name: 'CSS',
      value: 0.9,
    },
    {
      name: 'JavaScript',
      value: 0.8,
    },
    {
      name: 'Angular',
      value: 0.7,
    },
    {
      name: 'React',
      value: 0.7,
    },
    {
      name: 'Vue',
      value: 0.6,
    },
  ];
}
