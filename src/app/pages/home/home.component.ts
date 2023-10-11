import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HomeSkillsComponent } from './home-skills.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { FirebaseService } from '@shared/services/firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    HomeSkillsComponent,
    FooterComponent,
    NgOptimizedImage,
  ],
})
export class HomeComponent implements OnInit {
  firebase = inject(FirebaseService);
  banner$ = this.firebase.getImageURL('homeImage');

  ngOnInit() {}
}
