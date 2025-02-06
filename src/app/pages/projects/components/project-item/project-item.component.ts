import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  signal,
  Signal,
  viewChild,
} from '@angular/core';
import { Project } from '@shared/models/project.mdel';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { addIcons } from 'ionicons';
import { logoGithub, openOutline } from 'ionicons/icons';
import {
  IonIcon,
  IonFooter,
  IonToolbar,
  IonButton,
  IonRow,
  IonCol,
  IonGrid,
  IonContent,
  IonCardTitle,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonButtons,
} from '@ionic/angular/standalone';
import { animate, inView } from 'motion';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonGrid,
    IonCol,
    IonRow,
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

  private firebase = inject(FirebaseService);

  readonly image = signal<string>('');

  constructor() {
    addIcons({ logoGithub, openOutline });
  }

  ngOnInit(): void {
    this.firebase
      .getImageURL(this.project().image)
      .subscribe((src) => this.image.set(src));
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
