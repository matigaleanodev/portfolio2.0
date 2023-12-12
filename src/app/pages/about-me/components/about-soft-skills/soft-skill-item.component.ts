import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '@shared/services/firebase.service';
import { TooltipDirective } from '@shared/directives/tooltip.directive';
import { SoftSkill } from '@shared/models/skills.model';

@Component({
  selector: 'app-soft-skill-item',
  standalone: true,
  imports: [TooltipDirective, AsyncPipe, TitleCasePipe],
  providers: [FirebaseService],
  template: `
    <article class="skill">
      <div
        class="border border-primary border-1 rounded-2 bg-gradient bg-opacity-25 skill__wrapped "
      >
        <picture class="d-flex w-100 skill__picture">
          <img
            Tooltip
            [src]="image$ | async"
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
  private firebase = inject(FirebaseService);
  image$: Observable<string> | undefined;

  ngOnInit(): void {
    this.image$ = this.firebase.getImageURL(this.data.image);
  }
}
