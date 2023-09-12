import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProfileComponent } from '../../components/about-profile/about-profile.component';
import { AboutSoftSkillsComponent } from '../../components/about-soft-skills/about-soft-skills.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [CommonModule, AboutProfileComponent, AboutSoftSkillsComponent],
})
export class AboutMeComponent {}
