import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonGrid,
  IonContent,
  IonTitle,
  IonCol,
  IonRow,
} from '@ionic/angular/standalone';
import { ContactMessageComponent } from './components/contact-message/contact-message.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonTitle,
    IonContent,
    IonGrid,
    UpperCasePipe,
    ContactMessageComponent,
    ContactFormComponent,
  ],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
