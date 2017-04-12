import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { FormsModule }     from '@angular/forms';

import { AppComponent }    from './app.component';
import { AppRouterModule } from './app.router.module';

import { AuthGuard }       from './services/auth-guard.service';
import { AdminModule }     from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    AppRouterModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AppModule { }
