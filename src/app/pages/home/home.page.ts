import {
  Component,
  computed,
  effect,
  ElementRef,
  viewChild,
} from '@angular/core';
import { IonContent, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { HomeSkillsComponent } from './components/home-skills/home-skills.component';

import { inView, animate } from 'motion';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonImg, IonCol, IonRow, IonContent, HomeSkillsComponent],
})
export class HomePage {
  perfilEl = viewChild<ElementRef>('perfil');
  perfil = computed(() => this.perfilEl()?.nativeElement);

  imagenEl = viewChild<ElementRef>('imagen');
  imagen = computed(() => this.imagenEl()?.nativeElement);

  constructor() {
    effect(() => {
      const perfil = this.perfil();
      if (perfil) {
        inView(perfil, () => {
          animate(
            perfil,
            { opacity: [0, 1], x: [-100, 0], y: [-100, 0] },
            { ease: [0.34, 1.56, 0.64, 1], duration: 2 }
          );
        });
      }

      const imagen = this.imagen();
      if (imagen) {
        inView(imagen, () => {
          animate(
            imagen,
            { opacity: [0, 1], x: [100, 0], y: [0, -100] },
            { ease: [0.25, 1.7, 0.5, 1.2], duration: 1.5 }
          );
        });
      }
    });
  }
}
