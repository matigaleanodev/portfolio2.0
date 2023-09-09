import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: [
    `
      @import 'variables';
      .header {
        background-color: $header-background-light;
        backdrop-filter: blur(12px);
      }
    `,
  ],
})
export class HeaderComponent {
  protected logo = 'assets/images/LogoMati.png';
  protected title = 'Matias Galeano Fullstack Developer';
}
