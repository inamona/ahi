import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { Guest } from 'app/modules/guestbook/guest';
import { of } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private guestsUrl = "/api/guests";

  constructor(
    private http: HttpClient,
    @Inject("window") private window: Window
  ) { }

  /**
   * Fetch {@link Guest}s from the server via HTTP.
   */
  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.guestsUrl).pipe(
      tap(_ => console.log(`fetched guests`)),
      catchError(this.handleError('getGuests', []))
    );
  }

  /**
   * Fetch an individual {@link Guest} from the server via HTTP.
   */
  getGuest(id: number): Observable<Guest> {
    const url = `${this.guestsUrl}/${id}`;
    return this.http.get<Guest>(url).pipe(
      tap(_ => console.log(`fetched guest id=${id}`)),
      catchError(this.handleError<Guest>(`getGuest id=${id}`))
    );
  }

  /**
   * Handle a failed HTTP operation.
   * @param operation - the operation that failed.
   * @param result - optional value to resturn as the {@link Observable} result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log it properly

      return of(result as T);
    }
  }
}
