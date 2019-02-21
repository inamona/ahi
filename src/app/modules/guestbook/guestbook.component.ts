import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Guest } from '../guestbook/guest';
import { GuestService } from '../../services/guest.service';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit, OnChanges {
  guestForm: FormGroup;
  nickname = new FormControl();

  guest = new Guest();
  guests: Guest[];

  constructor(private guestService: GuestService) { }

  ngOnInit() {
    this.getGuests()
    this.guestForm = new FormGroup({
      nickname: this.nickname
    });
  }

  ngOnChanges() {
    this.getGuests()
  }

  getGuests(): void {
    this.guestService.getGuests()
      .subscribe(guests => this.guests = guests);
  }

  onSubmit() {
    let enteredNickname = this.guestForm.value.nickname;
    this.guestService.createGuest(enteredNickname)
      .subscribe(
        (guest) => this.ngOnChanges(),
        (err: Error) => console.error(`an error occurred: ${err}`),
        () => this.guestForm.pristine
      );
  }
}
