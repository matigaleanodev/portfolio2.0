import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FirebaseService } from '@shared/services/firebase.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navMenu') navMenu!: ElementRef;
  private firebase = inject(FirebaseService);
  protected logo$ = this.firebase.getImageURL('profileImage');
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
