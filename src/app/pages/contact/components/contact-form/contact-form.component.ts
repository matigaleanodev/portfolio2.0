import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ContactService } from '@shared/services/contact.service';
import { CreateContactDTO } from 'src/app/shared/models/contact.model';
import { AppService } from '@shared/services/app.service';
import { ToastrService } from 'ngx-toastr';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgClass,
  ],
  providers: [AppService, ContactService],
  templateUrl: './contact-form.component.html',
  styles: [
    `
      .error-container {
        height: 1.5rem;
      }

      .mh78 {
        min-height: 78px;
      }
    `,
  ],
})
export class ContactFormComponent {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(25),
    ]),
    recaptcha: new FormControl(null, [Validators.required]),
  });

  sitekey = environment.RECAPTCHA.SITE_KEY;
  private service = inject(ContactService);
  private toastr = inject(ToastrService);
  private app = inject(AppService);

  get Name() {
    return this.contactForm.get('name');
  }

  get Email() {
    return this.contactForm.get('email');
  }

  get Message() {
    return this.contactForm.get('message');
  }

  submit(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) {
      this.app._loading$.next(true);
      const contact: CreateContactDTO = this.contactForm.getRawValue();
      this.service.send(contact).subscribe({
        next: (res) => {
          this.toastr.success(
            `Tu retroalimentación es muy importante para mí.`,
            `Gracias ${res.name} por tu mensaje`
          );
        },
        error: (error) => {
          this.app._loading$.next(false);
        },
        complete: () => {
          this.contactForm.reset();
          this.app._loading$.next(false);
        },
      });
    } else {
      this.contactForm.markAllAsTouched();
      this.toastr.warning('Formulario no válido', 'Error');
    }
  }
}
