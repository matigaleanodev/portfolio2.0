import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonImg, IonCol, IonRow, IonContent],
})
export class HomePage {
  constructor() {}
}
