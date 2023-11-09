import { Component, Input, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Project } from 'src/app/shared/models/project.model';
import { TooltipDirective } from 'src/app/shared/directives/tooltip.directive';
import { FirebaseService } from '@shared/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [TooltipDirective, AsyncPipe],
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project!: Project;
  hovered: boolean = true;

  private firebase = inject(FirebaseService);
  image$: Observable<string> | undefined;

  ngOnInit(): void {
    this.image$ = this.firebase.getImageURL(this.project.image);
  }
}
