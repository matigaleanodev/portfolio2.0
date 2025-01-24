import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from '@shared/components/subtitle/subtitle.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { DashboardProjectsComponent } from './components/dashboard-projects/dashboard-projects.component';
import { DashboardSoftSkillsComponent } from './components/dashboard-soft-skills/dashboard-soft-skills.component';
import { DashboardHardSkillsComponent } from './components/dashboard-hard-skills/dashboard-hard-skills.component';

type viewMode = 'base' | 'profile' | 'project' | 'softskill' | 'hardskill';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [
        SubtitleComponent,
        InboxComponent,
        ProfileFormComponent,
        DashboardProjectsComponent,
        DashboardSoftSkillsComponent,
        DashboardHardSkillsComponent,
    ]
})
export class DashboardComponent {
  mode: viewMode = 'base';

  modeSelect(mode: viewMode) {
    this.mode = mode;
  }
}
