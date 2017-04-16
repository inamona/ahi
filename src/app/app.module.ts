import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';
import { AppRouterModule }    from './app.router.module';

import { AuthGuard }          from './services/auth-guard.service';
import { AdminModule }        from './modules/admin/admin.module';
import { LoginComponent }     from './modules/login/login.component';
import { LoginRouterModule }  from './modules/login/login.router.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    LoginRouterModule,
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
