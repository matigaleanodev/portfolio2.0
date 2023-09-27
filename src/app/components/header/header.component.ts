import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navMenu') navMenu!: ElementRef;
  protected logo = 'assets/images/LogoMati.png';
  protected title = 'M.G. Developer';

  collapse() {
    let classList = this.navMenu.nativeElement.classList;
    if (classList.contains('show')) {
      classList.remove('show');
    } else {
      classList.add('show');
    }
  }
}
