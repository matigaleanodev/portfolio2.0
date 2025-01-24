import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateProject, Project } from '@shared/models/project.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styles: [],
    imports: [ReactiveFormsModule, ImageUploaderComponent]
})
export class ProjectFormComponent implements OnInit {
  @Input() selectedProject: Project | null = null;

  @Output() projectFormSubmit = new EventEmitter<CreateProject>();
  @Output() projectFormCancel = new EventEmitter<void>();

  projectForm: FormGroup = new FormGroup({
    id: new FormControl<number>(0),
    profileId: new FormControl<number>(1),
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
    frontUrl: new FormControl<string>('', [Validators.pattern('https?://.+')]),
    backUrl: new FormControl<string>('', [Validators.pattern('https?://.+')]),
    demoUrl: new FormControl<string>('', [Validators.pattern('https?://.+')]),
  });

  get name() {
    return this.projectForm.get('name')!;
  }

  get description() {
    return this.projectForm.get('description')!;
  }

  get frontUrl() {
    return this.projectForm.get('frontUrl')!;
  }

  get backUrl() {
    return this.projectForm.get('backUrl')!;
  }

  get demoUrl() {
    return this.projectForm.get('demoUrl')!;
  }

  ngOnInit(): void {
    if (this.selectedProject) {
      this.projectForm.patchValue(this.selectedProject);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.projectForm.valid) {
      const project: CreateProject = this.sanitizeFormValues(
        this.projectForm.getRawValue()
      );
      this.projectFormSubmit.emit(project);
    } else {
      this.projectForm.markAllAsTouched();
    }
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.projectFormCancel.emit();
  }

  sanitizeFormValues(values: any): any {
    // Recorre los valores del formulario y cambia las cadenas vacías a null
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if (values[key] === '') {
          values[key] = null;
        }
      }
    }

    return values;
  }
}
