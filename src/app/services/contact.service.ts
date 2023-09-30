import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact, CreateContactDTO } from '../models/contact.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  _http = inject(HttpClient);
  _API_URL = environment.API_URL;

  send(message: CreateContactDTO): Observable<Contact> {
    return this._http.post<Contact>(`${this._API_URL}/contact`, message).pipe(
      map((contact) => {
        return contact;
      })
    );
  }
}
