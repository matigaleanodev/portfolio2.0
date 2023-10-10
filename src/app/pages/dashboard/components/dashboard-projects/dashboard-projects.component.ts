import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@shared/models/project.model';
import { ProjectFormComponent } from '../project-form/project-form.component';

type ViewMode = 'list' | 'form';

@Component({
  selector: 'app-dashboard-projects',
  standalone: true,
  templateUrl: './dashboard-projects.component.html',
  styles: [
    `
      @import 'variables';
      tr,
      th,
      td {
        height: 42px !important;
      }
      table tr td,
      table tr th {
        background-color: $transparent !important;
      }

      .modal-dialog {
        z-index: 9999 !important;
      }
    `,
  ],
  imports: [CommonModule, ProjectFormComponent],
})
export class DashboardProjectsComponent implements OnInit {
  @ViewChild('projectModal') myModal: any;
  @ViewChild('closeModal') closeModal: any;

  projects: Project[] = [];
  viewMode: ViewMode = 'list';
  selectedProject: Project | null = null;

  mostrarModal = false;

  abrirModal(project: Project) {
    this.selectedProject = project;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.selectedProject = null;
    this.mostrarModal = false;
  }

  ngOnInit(): void {
    const data = sessionStorage.getItem('projects');
    if (data) {
      this.projects = JSON.parse(data);
    }
  }

  add() {
    this.viewMode = 'form';
  }

  delete() {
    console.log(this.selectedProject);
  }

  edit(project: Project) {
    this.selectedProject = project;
    this.viewMode = 'form';
  }

  cancel() {
    this.viewMode = 'list';
    this.selectedProject = null;
  }
}
