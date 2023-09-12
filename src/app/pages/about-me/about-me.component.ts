import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProfileComponent } from '../../components/about-profile/about-profile.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [CommonModule, AboutProfileComponent],
})
export class AboutMeComponent {}
