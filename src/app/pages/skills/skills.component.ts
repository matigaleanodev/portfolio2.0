import {
  Component,
  computed,
  effect,
  ElementRef,
  OnInit,
  viewChild,
} from '@angular/core';
import { FrontendCardComponent } from './components/frontend-card/frontend-card.component';
import { BackendCardComponent } from './components/backend-card/backend-card.component';
import { ToolsCardComponent } from './components/tools-card/tools-card.component';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonTitle,
} from '@ionic/angular/standalone';
import { animate, inView } from 'motion';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    IonTitle,
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    FrontendCardComponent,
    BackendCardComponent,
    ToolsCardComponent,
    UpperCasePipe,
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  frontendEl = viewChild<ElementRef>('frontend');
  frontend = computed(() => this.frontendEl()?.nativeElement);

  backendEl = viewChild<ElementRef>('backend');
  backend = computed(() => this.backendEl()?.nativeElement);

  toolsEl = viewChild<ElementRef>('tools');
  tools = computed(() => this.toolsEl()?.nativeElement);

  constructor() {
    effect(() => {
      const frontend = this.frontend();
      const backend = this.backend();
      const tools = this.tools();
      const easing: any = [0.25, 1.7, 0.5, 1.2];
      const duration = 1.5;

      if (frontend) {
        inView(frontend, () => {
          animate(
            frontend,
            { opacity: [0, 1], x: [-100, 0] },
            { ease: easing, duration: duration }
          );
        });
      }
      if (backend) {
        inView(backend, () => {
          animate(
            backend,
            { opacity: [0, 1], x: [100, 0] },
            { ease: easing, duration: duration * 1.4 }
          );
        });
      }
      if (tools) {
        inView(tools, () => {
          animate(
            tools,
            { opacity: [0, 1], x: [-100, 0] },
            { ease: easing, duration: duration * 1.8 }
          );
        });
      }
    });
  }
}
