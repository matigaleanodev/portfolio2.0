import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialBoxComponent } from '../../components/social-box/social-box.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styles: [``],
  imports: [CommonModule, SocialBoxComponent, ContactFormComponent],
})
export class ContactComponent {}
