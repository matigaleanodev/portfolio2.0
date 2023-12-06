import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HomeSkillsComponent } from './home-skills.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { FirebaseService } from '@shared/services/firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HomeSkillsComponent, FooterComponent, NgOptimizedImage, AsyncPipe],
})
export class HomeComponent {
  firebase = inject(FirebaseService);
  banner: Signal<string> = toSignal(this.firebase.getImageURL('homeImage'), {
    initialValue: '',
  });
}
