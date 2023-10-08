import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { InboxComponent } from '../../components/inbox/inbox.component';
import { ProfileFormComponent } from '../../components/profile-form/profile-form.component';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';
import { SoftSkillFormComponent } from '../../components/soft-skill-form/soft-skill-form.component';
import { HardSkillFormComponent } from '../../components/hard-skill-form/hard-skill-form.component';

type viewMode = 'base' | 'profile' | 'project' | 'softskill' | 'hardskill';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CommonModule,
    SubtitleComponent,
    InboxComponent,
    ProfileFormComponent,
    ProjectFormComponent,
    SoftSkillFormComponent,
    HardSkillFormComponent,
  ],
})
export class DashboardComponent {
  mode: viewMode = 'base';

  modeSelect(mode: viewMode) {
    this.mode = mode;
  }
}
