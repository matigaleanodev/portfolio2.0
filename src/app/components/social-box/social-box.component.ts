import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-box.component.html',
  styles: [
    `
      @import 'variables';

      .socialbox {
        z-index: 2;
        &-link {
          display: flex;
          align-items: center;
          height: 1.6rem;
          text-decoration: none;
          transition: all 0.5s ease;
          &:hover {
            transform: scale(1.5);
          }
          .fa-facebook:hover {
            color: $facebook;
          }
          .fa-twitter:hover {
            color: $twitter;
          }
          .fa-instagram:hover {
            color: $instagram;
          }
          .fa-linkedin:hover {
            color: $linkedin;
          }
          .fa-github:hover {
            color: $github;
          }
          .fa-envelope:hover {
            color: $white;
          }
          .fa-whatsapp:hover {
            color: $whatsapp;
          }
          &-item {
            font-size: 1.5rem;
            width: 2rem;
            min-width: 2rem;
            text-align: center;
          }
        }
      }
    `,
  ],
})
export class SocialBoxComponent {
  @Input() mail: boolean = false;
}
