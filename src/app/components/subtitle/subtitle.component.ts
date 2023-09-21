import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="d-flex mt-5 mb-3 pb-2 border-bottom border-light text-light">
      <h3 class="fs-1 fw-bold">{{ title }}</h3>
      <div class="d-flex gap-3 ms-auto">
        <i
          class="fa-solid fa-angles-up m-auto icon pointer"
          (click)="onClick(title === 'Proyectos' ? 'home' : 'about')"
        ></i>
      </div>
    </div>
  `,
  styles: [
    `
      @import 'variables';

      .icon {
        transition: all 0.5s ease;
        &:hover {
          color: $primary;
          transform: scale(1.25);
        }
        &:active {
          color: $light;
          transform: scale(0.75);
        }
      }
    `,
  ],
})
export class SubtitleComponent {
  @Input() title: string = '';
  @Output() onAdd = new EventEmitter<void>();
  onLogin: boolean = false;

  private viewportScroller = inject(ViewportScroller);

  onClick(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}