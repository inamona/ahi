import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestbookComponent } from './guestbook.component';
import { GuestbookRouterModule } from './guestbook.router.module';

@NgModule({
  imports: [
    CommonModule,
    GuestbookRouterModule
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
