import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { CreateProject, Project } from '@shared/models/project.model';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ProjectService } from '@shared/services/project.service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '@shared/services/app.service';

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
  imports: [ProjectFormComponent, TitleCasePipe],
})
export class DashboardProjectsComponent implements OnInit {
  @ViewChild('projectModal') myModal: any;
  @ViewChild('closeModal') closeModal: any;

  private service = inject(ProjectService);
  private toastr = inject(ToastrService);
  private app = inject(AppService);

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

  onFormSubmit(project: CreateProject) {
    if (this.selectedProject) {
      this.update(project);
    } else {
      this.save(project);
    }
    this.cancel();
  }

  add() {
    this.viewMode = 'form';
  }

  save(project: CreateProject) {
    this.app._loading$.next(true);
    this.service.save(project).subscribe({
      next: (response: Project) => {
        this.projects.push(response);
        sessionStorage.setItem('projects', JSON.stringify(this.projects));
        this.app._loading$.next(false);
        this.toastr.success('Proyecto guardado correctamente');
      },
      error: () => {
        this.app._loading$.next(false);
        this.toastr.error('Error al guardar el proyecto');
      },
    });
  }

  update(project: CreateProject) {
    this.app._loading$.next(true);
    this.service.update(project).subscribe({
      next: (response: Project) => {
        this.projects = this.projects.map((p) =>
          p.id === project.id ? response : p
        );
        sessionStorage.setItem('projects', JSON.stringify(this.projects));
        this.app._loading$.next(false);
        this.selectedProject = null;
        this.toastr.success('Proyecto actualizado correctamente');
      },
      error: () => {
        this.app._loading$.next(false);
        this.selectedProject = null;
        this.toastr.error('Error al actualizar el proyecto');
      },
    });
  }

  delete() {
    const selectedProject = this.selectedProject;
    if (selectedProject) {
      this.app._loading$.next(true);
      this.service.delete(selectedProject.id).subscribe({
        next: () => {
          this.projects = this.projects.filter(
            (p) => p.id !== selectedProject.id
          );
          sessionStorage.setItem('projects', JSON.stringify(this.projects));
          this.selectedProject = null;
          this.app._loading$.next(false);
          this.toastr.success('Proyecto eliminado correctamente');
        },
        error: () => {
          this.app._loading$.next(false);
          this.selectedProject = null;
          this.toastr.error('Error al eliminar el proyecto');
        },
      });
    } else {
      this.toastr.error('Seleccione un proyecto para eliminar');
    }
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
