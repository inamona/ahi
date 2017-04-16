import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './40x/pagenotfound.component';
import { ServerErrorComponent } from './50x/servererror.component';

const errorRoutes: Routes = [
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: 'servererror', component: ServerErrorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(errorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorRouterModule { }
