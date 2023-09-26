import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { ProjectItemComponent } from '../../components/project-item/project-item.component';
import { Project } from 'src/app/models/project.model';
import { ProjectList } from './projects';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [
    CommonModule,
    SubtitleComponent,
    ProjectItemComponent,
    FooterComponent,
  ],
})
export class ProjectsComponent {
  projects: Project[] = ProjectList;
}
