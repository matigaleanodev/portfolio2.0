import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonCardContent,
  IonCard,
  IonInput,
  IonIcon,
  IonCol,
  IonRow,
  IonGrid,
  IonTextarea,
  IonButton,
} from '@ionic/angular/standalone';
import { CreateContactDTO } from '@shared/models/contact.model';
import { ContactService } from '@shared/services/contact/contact.service';
import { ToastrService } from '@shared/services/toastr/toastr.service';
import { addIcons } from 'ionicons';
import { documentText, mail, person } from 'ionicons/icons';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonInput,
    IonCard,
    IonCardContent,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
})
export class ContactFormComponent {
  private _service = inject(ContactService);
  private _toastr = inject(ToastrService);

  contactForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    message: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(25),
    ]),
    recaptcha: new FormControl(null, [Validators.required]),
  });

  sitekey = environment.RECAPTCHA.SITE_KEY;

  constructor() {
    addIcons({
      person,
      mail,
      documentText,
    });
  }

  get Name() {
    return this.contactForm.get('name');
  }

  nameError(): string {
    return this.Name?.hasError('required')
      ? 'Debes ingresar tu nombre!'
      : 'Nombre invalido!';
  }

  get Email() {
    return this.contactForm.get('email');
  }

  emailError(): string {
    return this.Email?.hasError('required')
      ? 'Debes ingresar tu email!'
      : this.Email?.hasError('email')
      ? 'El formato del email es invalido!'
      : 'Email invalido!';
  }

  get Message() {
    return this.contactForm.get('message');
  }

  messageError(): string {
    return this.Message?.hasError('required')
      ? 'Debes dejarme un mensaje!'
      : this.Message?.hasError('minlength')
      ? 'El mensaje es muy corto!'
      : 'Mensaje invalido!';
  }

  get Recaptcha() {
    return this.contactForm.get('recaptcha');
  }

  submit(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) {
      const contact: CreateContactDTO = this.contactForm.getRawValue();
      debugger;
      this._service.send(contact).subscribe({
        next: (res) => {
          this._toastr.success(
            `Gracias ${res.name} por tu mensaje, tu retroalimentación es muy importante para mí.`
          );
        },
        error: (error) => {
          this._toastr.error(error);
        },
        complete: () => {
          this.contactForm.reset();
        },
      });
    } else {
      this.contactForm.markAllAsTouched();
      this._toastr.warning('Formulario no válido');
    }
  }
}
