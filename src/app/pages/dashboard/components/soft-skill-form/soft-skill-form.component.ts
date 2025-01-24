import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { CreateSoftSkill, SoftSkill } from '@shared/models/skills.model';

@Component({
    selector: 'app-soft-skill-form',
    imports: [ReactiveFormsModule, ImageUploaderComponent],
    templateUrl: './soft-skill-form.component.html',
    styles: []
})
export class SoftSkillFormComponent implements OnInit {
  @Input() selectedSkill: SoftSkill | null = null;

  @Output() skillFormSubmit = new EventEmitter<CreateSoftSkill>();
  @Output() skillFormCancel = new EventEmitter<void>();

  skillForm: FormGroup = new FormGroup({
    id: new FormControl<number>(0),
    profileId: new FormControl<number>(1),
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
  });

  get name() {
    return this.skillForm.get('name')!;
  }

  get description() {
    return this.skillForm.get('description')!;
  }

  get type() {
    return this.skillForm.get('type')!;
  }

  get url() {
    return this.skillForm.get('url')!;
  }

  ngOnInit(): void {
    if (this.selectedSkill) {
      this.skillForm.patchValue(this.selectedSkill);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.skillForm.valid) {
      const skill: CreateSoftSkill = this.skillForm.getRawValue();
      this.skillFormSubmit.emit(skill);
    } else {
      this.skillForm.markAllAsTouched();
    }
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.skillFormCancel.emit();
  }
}
