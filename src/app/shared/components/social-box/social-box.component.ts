import { Component, input, OnInit } from '@angular/core';
import { IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGithub, logoInstagram, logoLinkedin, mail } from 'ionicons/icons';

@Component({
  selector: 'app-social-box',
  templateUrl: './social-box.component.html',
  styleUrls: ['./social-box.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons],
})
export class SocialBoxComponent implements OnInit {
  readonly hasMail = input<boolean>(false);

  constructor() {
    addIcons({
      logoInstagram,
      logoGithub,
      logoLinkedin,
      mail,
    });
  }

  ngOnInit() {}
}
