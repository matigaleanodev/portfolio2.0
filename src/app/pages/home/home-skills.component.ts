import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-home-skills',
  standalone: true,
  imports: [CommonModule],
  template: `<span id="typed-element" class="typed-element subtitle"></span>`,
  styles: [
    `
      @import 'variables';

      .subtitle {
        font-weight: 800;
        color: $light;
        text-shadow: 2px 4px 12px $shadow-dark;
        line-height: 2.5rem;
        padding: 5px;
      }
    `,
  ],
})
export class HomeSkillsComponent implements OnInit {
  ngOnInit() {
    const options: TypedOptions = {
      strings: [
        '<span style="color: #dd1b16">Angular</span> <img src="assets/icons/angular.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        '<span style="color: #e02e2f">NestJs</span> <img src="assets/icons/nestjs.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        '<span style="color: #6cc24a">NodeJs</span> <img src="assets/icons/nodejs.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        '<span style="color: #00758f">MySQL</span> <img src="assets/icons/mysql.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        '<span style="color: #f7df1e">Javascript</span> <img src="assets/icons/javascript.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        '<span style="color: #007acc">Typescript</span> <img src="assets/icons/typescript.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
        '<span style="color: #e34c26">HTML</span> <img src="assets/icons/html.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem"> y <span style="color: #2965f1">CSS</span> <img src="assets/icons/css.svg" style="height: 1.8rem; width: 1.8rem; margin-bottom: 0.5rem">',
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
