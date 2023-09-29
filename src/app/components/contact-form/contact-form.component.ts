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
    debugger;
    event.preventDefault();
    if (this.contactForm.valid) {
      const contact: CreateContactDTO = this.contactForm.getRawValue();
      this.service.send(contact).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
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
