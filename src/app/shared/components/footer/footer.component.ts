import { Component, LOCALE_ID, Signal, signal } from '@angular/core';
import { DatePipe, TitleCasePipe, registerLocaleData } from '@angular/common';
import { SocialBoxComponent } from '../social-box/social-box.component';
import localeEs from '@angular/common/locales/es';
import { RouterLink } from '@angular/router';

registerLocaleData(localeEs);

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styles: [
    `
      @import 'variables';
      .footer {
        background-color: $header-background-dark !important;
        backdrop-filter: blur(5px) !important;
        -webkit-backdrop-filter: blur(5px) !important;
      }
      .nav-link {
        font-size: 0.8rem;
        transition: all 0.3s ease-out 0s;
        &:hover {
          color: $primary !important;
          transform: scale(1.1);
        }
        &:active {
          transform: scale(0.9);
        }
      }
    `,
  ],
  imports: [SocialBoxComponent, RouterLink, DatePipe, TitleCasePipe],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class FooterComponent {
  currentMonth: Signal<Date> = signal<Date>(new Date());
}
