import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { HardSkillFormComponent } from '../hard-skill-form/hard-skill-form.component';
import { HardSkillService } from '@shared/services/hard-skill.service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '@shared/services/app.service';
import { CreateHardSkill, HardSkill } from '@shared/models/skills.model';
import { TitleCasePipe } from '@angular/common';

type ViewMode = 'list' | 'form';

@Component({
  selector: 'app-dashboard-hard-skills',
  standalone: true,
  imports: [HardSkillFormComponent, TitleCasePipe],
  templateUrl: './dashboard-hard-skills.component.html',
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
})
export class DashboardHardSkillsComponent implements OnInit {
  @ViewChild('skillModal') myModal: any;
  @ViewChild('closeModal') closeModal: any;

  private service = inject(HardSkillService);
  private toastr = inject(ToastrService);
  private app = inject(AppService);

  skills: HardSkill[] = [];
  viewMode: ViewMode = 'list';
  selectedSkill: HardSkill | null = null;

  mostrarModal = false;

  abrirModal(skill: HardSkill) {
    this.selectedSkill = skill;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.selectedSkill = null;
    this.mostrarModal = false;
  }

  ngOnInit(): void {
    const data = sessionStorage.getItem('hardSkills');
    if (data) {
      this.skills = JSON.parse(data);
    }
  }

  onFormSubmit(skill: CreateHardSkill) {
    if (this.selectedSkill) {
      this.update(skill);
    } else {
      this.save(skill);
    }
    this.cancel();
  }

  add() {
    this.viewMode = 'form';
  }

  save(skill: CreateHardSkill) {
    this.app._loading$.next(true);
    this.service.save(skill).subscribe({
      next: (response: HardSkill) => {
        this.skills.push(response);
        sessionStorage.setItem('hardSkills', JSON.stringify(this.skills));
        this.app._loading$.next(false);
        this.toastr.success('Habilidad guardada correctamente');
      },
      error: () => {
        this.app._loading$.next(false);
        this.toastr.error('Error al guardar la habilidad');
      },
    });
  }

  update(skill: CreateHardSkill) {
    this.app._loading$.next(true);
    this.service.update(skill).subscribe({
      next: (response: HardSkill) => {
        this.skills = this.skills.map((s) =>
          s.id === skill.id ? response : s
        );
        sessionStorage.setItem('hardSkills', JSON.stringify(this.skills));
        this.app._loading$.next(false);
        this.toastr.success('Habilidad actualizada correctamente');
      },
      error: () => {
        this.app._loading$.next(false);
        this.toastr.error('Error al guardar la habilidad');
      },
    });
  }

  delete() {
    const selectedSkill = this.selectedSkill;
    if (selectedSkill) {
      this.service.delete(selectedSkill.id).subscribe({
        next: () => {
          this.skills = this.skills.filter((s) => s.id !== selectedSkill.id);
          sessionStorage.setItem('hardSkills', JSON.stringify(this.skills));
          this.selectedSkill = null;
          this.app._loading$.next(false);
          this.toastr.success('Habilidad eliminada correctamente');
        },
        error: () => {
          this.app._loading$.next(false);
          this.toastr.error('Error al eliminar la habilidad');
        },
      });
    } else {
      this.toastr.error('Seleccione una habilidad para eliminar');
    }
  }

  edit(skill: HardSkill) {
    this.viewMode = 'form';
    this.selectedSkill = skill;
  }

  cancel() {
    this.viewMode = 'list';
    this.selectedSkill = null;
  }
}
