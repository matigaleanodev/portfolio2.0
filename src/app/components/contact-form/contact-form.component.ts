import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ContactService } from 'src/app/services/contact.service';
import { CreateContactDTO } from 'src/app/models/contact.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styles: [
    `
      .error-container {
        height: 1.5rem;
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
  service = inject(ContactService);
  app = inject(AppService);

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
      this.app.loading$.next(true);
      const contact: CreateContactDTO = this.contactForm.getRawValue();
      this.service.send(contact).subscribe({
        next: (response) => {
          console.log(response);
          this.app.loading$.next(false);
        },
        error: (error) => {
          console.log(error);
          this.app.loading$.next(false);
        },
        complete: () => {
          this.contactForm.reset();
        },
      });
    } else {
      this.contactForm.markAllAsTouched();
      console.log('Form is not valid');
    }
  }
}
