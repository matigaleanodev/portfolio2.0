import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '@shared/services/contact.service';
import { Observable, of, switchMap } from 'rxjs';
import { Contact } from 'src/app/shared/models/contact.model';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '@shared/services/app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inbox.component.html',
  styles: [
    `
      .accordion-collapse {
        transition: all 0.3s ease-out 0s !important;
      }
    `,
  ],
})
export class InboxComponent {
  service = inject(ContactService);
  toastr = inject(ToastrService);
  app = inject(AppService);

  messages$: Observable<Contact[]> = this.service.getMessages();

  delete(i: number) {
    this.app._loading$.next(true);

    this.service
      .deleteMessage(i)
      .pipe(switchMap(() => this.service.getMessages()))
      .subscribe({
        next: (messages) => {
          this.messages$ = of(messages);
          this.toastr.success('Message deleted successfully');
          this.app._loading$.next(false);
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error(err.error.message, err.error.status);
          this.app._loading$.next(false);
        },
      });
  }
}
