import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/models/project.model';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project!: Project;
  image: string = '';
  hovered: boolean = true;

  ngOnInit(): void {
    this.image = 'assets/images/projects/' + this.project.image;
  }
}
