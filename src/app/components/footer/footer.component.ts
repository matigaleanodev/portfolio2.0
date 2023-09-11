import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SocialBoxComponent } from '../social-box/social-box.component';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styles: [``],
  imports: [CommonModule, SocialBoxComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class FooterComponent {
  currentMonth = new Date();
}
