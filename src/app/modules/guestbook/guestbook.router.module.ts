import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestbookComponent } from './guestbook.component';

const guestbookRoutes: Routes = [
  { path: 'guestbook', component: GuestbookComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(guestbookRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GuestbookRouterModule { }
