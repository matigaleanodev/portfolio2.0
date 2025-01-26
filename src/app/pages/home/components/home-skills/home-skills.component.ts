import { Component, OnInit } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';
import { addIcons } from 'ionicons';
import {
  logoAngular,
  logoIonic,
  logoJavascript,
  logoNodejs,
} from 'ionicons/icons';

@Component({
  selector: 'app-home-skills',
  imports: [],
  standalone: true,
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.scss'],
})
export class HomeSkillsComponent implements OnInit {
  constructor() {
    addIcons({
      logoAngular,
      logoNodejs,
      logoJavascript,
      logoIonic,
    });
  }

  ngOnInit() {
    const options: TypedOptions = {
      strings: [
        '<span class="skill-text" style="color: var(--ion-color-angular)">Angular <ion-icon aria-hidden="true" class="p0 m0" icon="logo-angular" /></span>',
        '<span class="skill-text" style="color: var(--ion-color-ionic)">Ionic <ion-icon aria-hidden="true" class="p0 m0" icon="logo-ionic" /></span>',
        '<span class="skill-text" style="color: var(--ion-color-nestjs)">NestJs <ion-icon aria-hidden="true" class="p0 m0" src="assets/logos/logo-nestjs.svg" /></span>',
        '<span class="skill-text" style="color: var(--ion-color-nodejs)">NodeJs <ion-icon aria-hidden="true" class="p0 m0" icon="logo-nodejs" /></span>',
        '<span class="skill-text" style="color: var(--ion-color-mysql)">MySQL <ion-icon aria-hidden="true" class="p0 m0" src="assets/logos/logo-mysql.svg" /></span>',
        '<span class="skill-text" style="color: var(--ion-color-javascript)">Javascript <ion-icon aria-hidden="true" class="p0 m0" icon="logo-javascript" /></span>',
        '<span class="skill-text" style="color: var(--ion-color-typescript)">Typescript <ion-icon aria-hidden="true" class="p0 m0" src="assets/logos/logo-typescript.svg" /></span> ',
        '<span class="skill-text" style="color: var(--ion-color-html)">HTML <ion-icon aria-hidden="true" class="p0 m0" src="assets/logos/logo-html5.svg" /></span> y <span class="skill-text" style="color: var(--ion-color-css)">CSS <ion-icon aria-hidden="true" class="p0 m0" src="assets/logos/logo-css3.svg" /></span>',
      ],
      typeSpeed: 70,
      startDelay: 150,
      backDelay: 1000,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed('.typed-element', options);
  }
}
