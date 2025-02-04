import {
  Component,
  computed,
  effect,
  inject,
  input,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Project } from '@shared/models/project.mdel';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { addIcons } from 'ionicons';
import { logoGithub, openOutline } from 'ionicons/icons';
import { Observable } from 'rxjs';
import { IonIcon } from '@ionic/angular/standalone';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  standalone: true,
  imports: [IonIcon, NgOptimizedImage],
})
export class ProjectItemComponent implements OnInit {
  readonly project = input.required<Project>();
  private firebase = inject(FirebaseService);

  private imgObs: Observable<string> | undefined;

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
