import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@shared/models/project.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './project-form.component.html',
  styles: [],
})
export class ProjectFormComponent {
  @Input() selectedProject: Project | null = null;

  projectForm: FormGroup = new FormGroup({
    id: new FormControl<number>(0),
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
    frontUrl: new FormControl<string>('', [Validators.pattern('https?://.+')]),
    backUrl: new FormControl<string>('', [Validators.pattern('https?://.+')]),
    demoUrl: new FormControl<string>('', [Validators.pattern('https?://.+')]),
  });
}
