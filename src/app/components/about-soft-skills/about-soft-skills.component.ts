import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '../subtitle/subtitle.component';
import { SoftSkillItemComponent } from './soft-skill-item.component';
import { SoftSkillList } from './soft-skills';
import { SoftSkill } from 'src/app/models/skills.model';

@Component({
  selector: 'app-about-soft-skills',
  standalone: true,
  templateUrl: './about-soft-skills.component.html',
  styles: [``],
  imports: [CommonModule, SubtitleComponent, SoftSkillItemComponent],
})
export class AboutSoftSkillsComponent {
  softSkills: SoftSkill[] = SoftSkillList;
}
