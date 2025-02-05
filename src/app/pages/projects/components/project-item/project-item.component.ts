import {
  Component,
  inject,
  input,
  OnInit,
  signal,
  Signal,
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
export class ProjectItemComponent implements OnInit {
  readonly project = input.required<Project>();
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
}
