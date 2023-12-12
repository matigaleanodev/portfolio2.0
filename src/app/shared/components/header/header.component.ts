import {
  Component,
  ElementRef,
  Signal,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FirebaseService } from '@shared/services/firebase.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, AsyncPipe],
  providers: [FirebaseService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navMenu') navMenu!: ElementRef;
  private firebase = inject(FirebaseService);
  protected logo: Signal<string> = toSignal(
    this.firebase.getImageURL('profileImage'),
    { initialValue: '' }
  );
  protected title: Signal<string> = signal<string>('M.G. Developer');

  collapse() {
    let classList = this.navMenu.nativeElement.classList;
    if (classList.contains('show')) {
      classList.remove('show');
    } else {
      classList.add('show');
    }
  }
}
