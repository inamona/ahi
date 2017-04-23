import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToyProblemsComponent } from './toy-problems.component';

const toyProblemsRoutes: Routes = [
  { path: 'toy-problems', component: ToyProblemsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(toyProblemsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ToyProblemsRouterModule { }
