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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  readonly project = input.required<Project>();
  private firebase = inject(FirebaseService);

  private imgObs: Observable<string> | undefined;

  readonly image = signal<string>('');

  ngOnInit(): void {
    //this.imgObs = this.firebase.getImageURL(this.project().image);
  }
}
