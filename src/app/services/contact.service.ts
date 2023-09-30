import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact, CreateContactDTO } from '../models/contact.model';
import { Observable, map } from 'rxjs';
import { BYPASS_JW_TOKEN } from './request.interceptor';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  _http = inject(HttpClient);
  _API_URL = environment.API_URL;

  send(message: CreateContactDTO): Observable<Contact> {
    return this._http
      .post<Contact>(`${this._API_URL}/contact`, message, {
        context: new HttpContext().set(BYPASS_JW_TOKEN, true),
      })
      .pipe(
        map((contact) => {
          return contact;
        })
      );
  }
}
