import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '@shared/components/subtitle/subtitle.component';
import { HardSkillItemComponent } from './hard-skill-item.component';
import { HardSkill } from 'src/app/shared/models/skills.model';
import { HardSkillList } from './hard-skills';

@Component({
  selector: 'app-about-hard-skills',
  standalone: true,
  templateUrl: './about-hard-skills.component.html',
  styleUrls: ['./about-hard-skills.component.scss'],
  imports: [CommonModule, SubtitleComponent, HardSkillItemComponent],
})
export class AboutHardSkillsComponent implements OnInit {
  frontend: HardSkill[] = [];
  backend: HardSkill[] = [];
  tools: HardSkill[] = [];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.frontend = HardSkillList.filter(
      (skill: HardSkill) => skill.type === 'frontend'
    );
    this.backend = HardSkillList.filter(
      (skill: HardSkill) => skill.type === 'backend'
    );
    this.tools = HardSkillList.filter(
      (skill: HardSkill) => skill.type === 'tool'
    );
  }
}
