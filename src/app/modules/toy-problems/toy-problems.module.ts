import { NgModule } from '@angular/core';

import { ToyProblemsComponent } from './toy-problems.component';
import { ToyProblemsRouterModule } from './toy-problems.router.module';

@NgModule({
  imports: [
    ToyProblemsRouterModule
  ],
  declarations: [
    ToyProblemsComponent
  ]
})
export class ToyProblemsModule { }
