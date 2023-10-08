import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialBoxComponent } from '@shared/components/social-box/social-box.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styles: [``],
  imports: [CommonModule, SocialBoxComponent, ContactFormComponent],
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('agradecimiento') agradecimiento!: ElementRef;
  @ViewChild('formulario') formulario!: ElementRef;

  private renderer = inject(Renderer2);

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateMinHeight();
  }

  ngAfterViewInit() {
    this.updateMinHeight();
  }

  updateMinHeight() {
    const agradecimientoHeight = this.agradecimiento.nativeElement.clientHeight;
    const formularioHeight = this.formulario.nativeElement.clientHeight;

    const maxHeight = Math.max(agradecimientoHeight, formularioHeight);

    if (window.innerWidth > 768) {
      this.renderer.setStyle(
        this.agradecimiento.nativeElement,
        'min-height',
        `${maxHeight}px`
      );
      this.renderer.setStyle(
        this.formulario.nativeElement,
        'min-height',
        `${maxHeight}px`
      );
    }
  }
}
