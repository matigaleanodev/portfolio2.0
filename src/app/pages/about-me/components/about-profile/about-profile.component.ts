import { Component, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-profile.component.html',
  styleUrls: ['./about-profile.component.scss'],
})
export class AboutProfileComponent {
  profilePic: string = 'assets/images/profilePicture.jpg';

  private viewportScroller = inject(ViewportScroller);

  onClick(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
