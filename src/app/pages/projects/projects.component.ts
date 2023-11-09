import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '@shared/components/subtitle/subtitle.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { Project } from 'src/app/shared/models/project.model';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

  imports: [SubtitleComponent, ProjectItemComponent, FooterComponent],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    this.getProjects().subscribe((projects) => {
      const aux = this.generateShuffledArray(projects.length);
      projects.forEach((project, i) => {
        project.delay = aux[i] * 500;
        this.projects.push(project);
      });
    });
  }

  getProjects(): Observable<Project[]> {
    const projects = sessionStorage.getItem('projects');
    return of(JSON.parse(projects ?? '[]') as Project[]);
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
