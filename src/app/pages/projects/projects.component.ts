import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { ProjectItemComponent } from '../../components/project-item/project-item.component';
import { Project } from 'src/app/models/project.model';
import { ProjectList$ } from './projects';
import { FooterComponent } from '../../components/footer/footer.component';
import { fadeInOnEnterAnimation } from 'angular-animations';

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
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    ProjectList$.subscribe((projects) => {
      const aux = this.generateShuffledArray(projects.length);
      projects.forEach((project, i) => {
        project.delay = aux[i] * 750;
        this.projects.push(project);
      });
    });
  }

  generateShuffledArray(size: number): number[] {
    const array = Array.from({ length: size }, (_, index) => index + 1);
    return this.shuffleArray(array);
  }

  shuffleArray(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
