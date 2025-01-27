import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonProgressBar,
  IonIcon,
  IonToolbar,
  IonButtons,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { terminalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-backend-card',
  standalone: true,
  imports: [
    IonButtons,
    IonToolbar,
    IonIcon,
    IonProgressBar,
    IonLabel,
    IonItem,
    IonList,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
  ],
  templateUrl: './backend-card.component.html',
  styleUrls: ['./backend-card.component.scss'],
})
export class BackendCardComponent implements OnInit {
  constructor() {
    addIcons({
      terminalOutline,
    });
  }

  ngOnInit() {}

  backendSkills = [
    {
      name: 'Node.js',
      value: 0.8,
    },
    {
      name: 'Express.js',
      value: 0.7,
    },
    {
      name: 'MongoDB',
      value: 0.7,
    },
    {
      name: 'MySQL',
      value: 0.6,
    },
    {
      name: 'Firebase',
      value: 0.6,
    },
    {
      name: 'GraphQL',
      value: 0.5,
    },
  ];
}
