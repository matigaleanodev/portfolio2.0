import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeSkillsComponent } from './home-skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, HomeSkillsComponent],
})
export class HomeComponent implements OnInit {
  banner: string = 'assets/images/banner-home.png';

  ngOnInit() {}
}
