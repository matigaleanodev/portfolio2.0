import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonTitle,
  IonCol,
  IonText,
  IonCardContent,
  IonCard,
} from '@ionic/angular/standalone';
import { InstantPhotoComponent } from './components/instant-photo/instant-photo.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonText,
    IonCol,
    IonTitle,
    IonRow,
    IonGrid,
    IonContent,
    UpperCasePipe,
    InstantPhotoComponent,
  ],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
