import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialBoxComponent } from '../social-box/social-box.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styles: [
    `
      @import 'variables';
      .footer {
        background-color: $header-background-dark;
        backdrop-filter: blur(12px);
      }
    `,
  ],
  imports: [CommonModule, SocialBoxComponent],
})
export class FooterComponent {}
