import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { Project } from '@shared/models/project.mdel';
import { addIcons } from 'ionicons';
import { logoGithub, openOutline } from 'ionicons/icons';
import {
  IonIcon,
  IonFooter,
  IonToolbar,
  IonButton,
  IonCardTitle,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonButtons,
  IonImg,
  IonText,
} from '@ionic/angular/standalone';
import { animate, inView } from 'motion';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonImg,
    IonButtons,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonToolbar,
    IonFooter,
    IonIcon,
  ],
})
export class ProjectItemComponent implements OnInit, AfterViewInit {
  readonly project = input.required<Project>();
  readonly index = input.required<number>();

  readonly cardRef = viewChild<ElementRef>('card');
  readonly card = computed(() => this.cardRef()?.nativeElement);

  readonly image = signal<string>('');

  constructor() {
    addIcons({ logoGithub, openOutline });
  }

  ngOnInit(): void {
    this.image.set(`/assets/projects/${this.project().image}`);
  }

  ngAfterViewInit() {
    const card = this.card();
    const index = this.index();
    if (card && index) {
      const animation =
        index % 2 === 0 ? this.backInLeft() : this.backInRight();
      inView(card, () => {
        animate(card, animation, {
          ease: [0.34, 1.56, 0.64, 1],
          duration: 2,
        });
      });
    }
  }

  backInLeft() {
    return {
      opacity: [0, 1],
      x: [200, 0],
      y: [0, 0],
    };
  }

  backInRight() {
    return {
      opacity: [0, 1],
      x: [-200, 0],
      y: [0, 0],
    };
  }
}
