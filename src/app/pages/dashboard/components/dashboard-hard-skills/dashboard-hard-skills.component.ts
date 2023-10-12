import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardSkillFormComponent } from '../hard-skill-form/hard-skill-form.component';
import { HardSkillService } from '@shared/services/hard-skill.service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '@shared/services/app.service';

type ViewMode = 'list' | 'form';

@Component({
  selector: 'app-dashboard-hard-skills',
  standalone: true,
  imports: [CommonModule, HardSkillFormComponent],
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
export class DashboardHardSkillsComponent {
  @ViewChild('projectModal') myModal: any;
  @ViewChild('closeModal') closeModal: any;

  private service = inject(HardSkillService);
  private toastr = inject(ToastrService);
  private app = inject(AppService);
}
