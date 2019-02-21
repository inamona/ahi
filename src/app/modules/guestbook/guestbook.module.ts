import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestbookComponent } from './guestbook.component';
import { GuestbookRouterModule } from './guestbook.router.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GuestbookRouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    GuestbookComponent
  ],
  providers: [
    { 
      provide: "window", useValue: window
    }
  ]
})
export class GuestbookModule { }
