import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FirebaseService } from '@shared/services/firebase.service';
import { Profile } from '@shared/models/profile.model';
import { AppService } from '@shared/services/app.service';

@Component({
  selector: 'app-about-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-profile.component.html',
  styleUrls: ['./about-profile.component.scss'],
})
export class AboutProfileComponent implements OnInit {
  profile!: Profile;

  private firebase = inject(FirebaseService);
  private app = inject(AppService);
  private viewportScroller = inject(ViewportScroller);

  profilePic$ = this.firebase.getImageURL('profileImage');

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    const profile = sessionStorage.getItem('profile');
    if (profile) {
      this.profile = JSON.parse(profile);
    } else {
      this.app._loading$.next(true);
      this.app.onInitApi().subscribe({
        next: (res) => {
          this.profile = res;
          this.app._loading$.next(false);
        },
      });
    }
  }

  onClick(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
