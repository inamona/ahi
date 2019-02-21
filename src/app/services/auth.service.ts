
import {of as observableOf,  Observable } from 'rxjs';

import {tap, delay} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  redirectUrl: string;

  login(): Observable<boolean> {
    return observableOf(true).pipe(delay(1000),tap(val => this.isLoggedIn = true),);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
