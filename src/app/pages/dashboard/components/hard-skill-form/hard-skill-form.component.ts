import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CreateHardSkill,
  HardSkill,
  skillType,
} from '@shared/models/skills.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';

@Component({
  selector: 'app-hard-skill-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ImageUploaderComponent],
  templateUrl: './hard-skill-form.component.html',
  styles: [],
})
export class HardSkillFormComponent implements OnInit {
  @Input() selectedSkill: HardSkill | null = null;

  @Output() skillFormSubmit = new EventEmitter<CreateHardSkill>();
  @Output() skillFormCancel = new EventEmitter<void>();

  skillForm: FormGroup = new FormGroup({
    id: new FormControl<number>(0),
    profileId: new FormControl<number>(1),
    name: new FormControl<string>('', [Validators.required]),
    type: new FormControl<skillType>('frontend', [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
    url: new FormControl<string>('', [Validators.pattern('https?://.+')]),
  });

  get name() {
    return this.skillForm.get('name')!;
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
      const skill: CreateHardSkill = this.skillForm.getRawValue();
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
