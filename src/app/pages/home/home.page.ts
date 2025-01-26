import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { HomeSkillsComponent } from './components/home-skills/home-skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonImg, IonCol, IonRow, IonContent, HomeSkillsComponent],
})
export class HomePage {}
