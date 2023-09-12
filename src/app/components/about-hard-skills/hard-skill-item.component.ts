import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { HardSkill } from 'src/app/models/skills.model';

@Component({
  selector: 'app-hard-skill-item',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  template: `
    <div class="d-flex flex-column gap-2 justify-content-center">
      <div class="d-flex justify-content-center mb-md-5">
        <picture class="skill__picture">
          <a href="{{ skill.url }}" target="_blank" rel="noopener noreferrer">
            <img
              Tooltip
              [src]="image"
              [alt]="skill.name"
              [tooltip]="skill.name"
              class="mt-1 mt-md-5 mb-1 mx-0 px-1 skill__icon"
            />
          </a>
        </picture>
      </div>
    </div>
  `,
  styles: [
    `
      @import 'variables';

      .skill {
        &__picture {
          width: 3rem;
          height: 3rem;
        }
        &__icon {
          height: 2.5rem;
          width: auto;
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
