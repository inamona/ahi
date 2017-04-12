import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }         from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }