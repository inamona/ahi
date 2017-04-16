import { NgModule } from '@angular/core';

import { ErrorRouterModule } from './error.router.module';
import { PageNotFoundComponent } from './40x/pagenotfound.component';
import { ServerErrorComponent } from './50x/servererror.component';

@NgModule({
  imports: [
    ErrorRouterModule
  ],
  declarations: [
    PageNotFoundComponent,
    ServerErrorComponent
  ]
})
export class ErrorModule { }
