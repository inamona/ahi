import { Component, OnInit } from '@angular/core';

import { Guest } from '../guestbook/guest';
import { GuestService } from '../../services/guest.service';

@Component({
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  
  guests: Guest[];

  constructor(private guestService: GuestService) { }

  ngOnInit() {
    this.getGuests()
  }

  getGuests(): void {
    this.guestService.getGuests()
    .subscribe(guests => this.guests = guests);
  }
}
