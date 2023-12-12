import { Component, OnInit, inject } from '@angular/core';
import { Profile } from '@shared/models/profile.model';
import { ProfileService } from '@shared/services/profile.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '@shared/services/app.service';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  templateUrl: './profile-form.component.html',
  styles: [],
  imports: [ReactiveFormsModule, ImageUploaderComponent],
  providers: [AppService, ProfileService],
})
export class ProfileFormComponent implements OnInit {
  profile!: Profile;

  profileForm: FormGroup = new FormGroup({
    id: new FormControl<number>(1, [Validators.required]),
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
  });

  service = inject(ProfileService);
  toastr = inject(ToastrService);
  app = inject(AppService);

  ngOnInit(): void {
    this.initData();
  }

  get Id() {
    return this.profileForm.get('id');
  }

  get Name() {
    return this.profileForm.get('name');
  }

  get Description() {
    return this.profileForm.get('description');
  }

  get Image() {
    return this.profileForm.get('image');
  }

  initData() {
    const storedProfile = sessionStorage.getItem('profile');

    if (storedProfile) {
      this.profile = JSON.parse(storedProfile);
      this.profileForm.patchValue(this.profile);
    } else {
      this.service.getProfile(1).subscribe({
        next: (profile) => {
          this.profile = profile;
          this.profileForm.patchValue(this.profile);
        },
      });
    }
  }

  onSave(event: Event) {
    event.preventDefault();
    if (this.profileForm.valid) {
      this.app._loading$.next(true);
      const editedProfile = this.profileForm.getRawValue();
      this.service.editProfile(editedProfile).subscribe({
        next: () => {
          this.app._loading$.next(false);
          this.toastr.success('Perfil editado con éxito', 'Éxito');
        },
        error: () => {
          this.app._loading$.next(false);
        },
      });
    } else {
      this.profileForm.markAllAsTouched();
      this.toastr.warning('Formulario no válido', 'Error');
    }
  }
}
