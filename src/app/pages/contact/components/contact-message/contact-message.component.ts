import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from '@ionic/angular/standalone';
import { SocialBoxComponent } from '@shared/components/social-box/social-box.component';

@Component({
  selector: 'app-contact-message',
  templateUrl: './contact-message.component.html',
  styleUrls: ['./contact-message.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    SocialBoxComponent,
  ],
})
export class ContactMessageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
