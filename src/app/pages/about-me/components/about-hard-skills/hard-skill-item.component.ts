import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipDirective } from 'src/app/shared/directives/tooltip.directive';
import { HardSkill } from 'src/app/shared/models/skills.model';

@Component({
  selector: 'app-hard-skill-item',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  template: `
    <a
      class="skill"
      href="{{ skill.url }}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <picture class="skill-picture">
        <img
          Tooltip
          [src]="image"
          [alt]="skill.name"
          [tooltip]="skill.name"
          class="skill-icon img-fluid"
        />
      </picture>
    </a>
  `,
  styles: [
    `
      @import 'variables';

      .skill {
        width: 3rem;
        height: 3rem;
        &-icon {
          width: 100%;
          height: 100%;
          cursor: pointer;
          transition: all 0.5s ease;
          &:hover {
            color: $light;
            transform: scale(1.25);
          }
          &:active {
            color: $light;
            transform: scale(0.75);
          }
        }
      }
    `,
  ],
})
export class HardSkillItemComponent implements OnInit {
  @Input() skill!: HardSkill;

  image: string = '';

  ngOnInit(): void {
    this.image = 'assets/icons/' + this.skill.image;
  }
}
