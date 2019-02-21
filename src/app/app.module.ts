import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { ReactiveFormsModule }        from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }       from './app.component';
import { AboutComponent }     from './about.component';
import { AppRouterModule }    from './app.router.module';

import { AuthGuard }          from './services/auth-guard.service';
import { AdminModule }        from './modules/admin/admin.module';
import { ErrorModule }        from './modules/error/error.module';
import { LoginComponent }     from './modules/login/login.component';
import { LoginRouterModule }  from './modules/login/login.router.module';
import { BlogModule }         from './modules/blog/blog.module';
import { GuestbookModule }    from './modules/guestbook/guestbook.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BlogModule,
    GuestbookModule,
    AdminModule,
    LoginRouterModule,
    AppRouterModule,
    ErrorModule,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AppModule { }
