import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '@shared/components/subtitle/subtitle.component';
import { SoftSkillItemComponent } from './soft-skill-item.component';
import { SoftSkill } from 'src/app/shared/models/skills.model';

@Component({
  selector: 'app-about-soft-skills',
  standalone: true,
  templateUrl: './about-soft-skills.component.html',
  styles: [``],
  imports: [CommonModule, SubtitleComponent, SoftSkillItemComponent],
})
export class AboutSoftSkillsComponent implements OnInit {
  softSkills: SoftSkill[] = [];

  ngOnInit(): void {
    const skills = sessionStorage.getItem('softSkills');
    if (skills) {
      this.softSkills = JSON.parse(skills);
    }
  }
}
