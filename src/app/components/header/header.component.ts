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
        background-color: $header-background-dark;
        backdrop-filter: blur(12px);
      }
      .margin {
        margin-left: 15px;

        @media (min-width: 768px) {
          margin-left: 30%;
        }
      }
      .link {
        transition: all 0.5s ease;
        &:hover {
          transform: scale(1.5);
        }
      }
    `,
  ],
})
export class HeaderComponent {
  protected logo = 'assets/images/LogoMati.png';
  protected title = 'Matias Galeano Developer';
}
