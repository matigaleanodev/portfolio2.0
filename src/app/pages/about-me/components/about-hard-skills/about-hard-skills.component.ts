import { Component, OnInit } from '@angular/core';
import { SubtitleComponent } from '@shared/components/subtitle/subtitle.component';
import { HardSkillItemComponent } from './hard-skill-item.component';
import { HardSkill } from 'src/app/shared/models/skills.model';

@Component({
    selector: 'app-about-hard-skills',
    templateUrl: './about-hard-skills.component.html',
    styleUrls: ['./about-hard-skills.component.scss'],
    imports: [SubtitleComponent, HardSkillItemComponent]
})
export class AboutHardSkillsComponent implements OnInit {
  frontend: HardSkill[] = [];
  backend: HardSkill[] = [];
  tools: HardSkill[] = [];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const skills = sessionStorage.getItem('hardSkills');
    let hardSkills = [];
    if (skills) {
      hardSkills = JSON.parse(skills);
      this.frontend = hardSkills.filter(
        (skill: HardSkill) => skill.type === 'frontend'
      );
      this.backend = hardSkills.filter(
        (skill: HardSkill) => skill.type === 'backend'
      );
      this.tools = hardSkills.filter(
        (skill: HardSkill) => skill.type === 'tool'
      );
    }
  }
}
