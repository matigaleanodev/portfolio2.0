import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BYPASS_JW_TOKEN } from '@shared/interceptors/request.interceptor';
import { Contact, CreateContactDTO } from '@shared/models/contact.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private API_URL = environment.API_URL;
  private _http = inject(HttpClient);

  send(message: CreateContactDTO): Observable<Contact> {
    return this._http
      .post<Contact>(`${this.API_URL}/api/contact`, message, {
        context: new HttpContext().set(BYPASS_JW_TOKEN, true),
      })
      .pipe(
        map((contact) => {
          return contact;
        })
      );
  }

  getMessages(): Observable<Contact[]> {
    return this._http.get<Contact[]>(`${this.API_URL}/api/contact`);
  }

  deleteMessage(id: number): Observable<Contact> {
    return this._http.delete<Contact>(`${this.API_URL}/api/contact/${id}`);
  }
}
