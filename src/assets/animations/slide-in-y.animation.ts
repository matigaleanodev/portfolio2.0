import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const slideInY = trigger('slideInY', [
  state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
  transition(':enter', [
    animate('0.5s ease', style({ transform: 'translateY(0)', opacity: 1 })),
  ]),
]);
