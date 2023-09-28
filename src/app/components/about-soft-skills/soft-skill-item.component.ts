import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { SoftSkill } from 'src/app/models/skills.model';

@Component({
  selector: 'app-soft-skill-item',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  template: `
    <article class="skill">
      <div
        class="border border-primary border-1 rounded-2 bg-gradient bg-opacity-25 skill__wrapped "
      >
        <picture class="d-flex w-100 skill__picture">
          <img
            Tooltip
            src="{{ image }}"
            alt="{{ data.name }}"
            class="my-2 mx-auto skill__icon"
            [tooltip]="data.name"
          />
        </picture>
        <div class="p-1 skill__body">
          <h3 class="p-2 text-primary text-center skill__body-title">
            {{ data.name | titlecase }}
          </h3>
          <p class="text-light text-center pb-2 skill__body-description">
            {{ data.description }}
          </p>
        </div>
      </div>
    </article>
  `,
  styleUrls: ['./soft-skill-item.component.scss'],
})
export class SoftSkillItemComponent implements OnInit {
  @Input() data!: SoftSkill;
  image: string = '';

  ngOnInit(): void {
    this.image = 'assets/images/soft-skills/' + this.data.image;
  }
}
