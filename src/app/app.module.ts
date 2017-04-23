import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';
import { AboutComponent }     from './about.component';
import { AppRouterModule }    from './app.router.module';

import { AuthGuard }          from './services/auth-guard.service';
import { AdminModule }        from './modules/admin/admin.module';
import { ErrorModule }        from './modules/error/error.module';
import { LoginComponent }     from './modules/login/login.component';
import { LoginRouterModule }  from './modules/login/login.router.module';
import { BlogModule }         from './modules/blog/blog.module';
import { ToyProblemsModule }  from './modules/toy-problems/toy-problems.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BlogModule,
    ToyProblemsModule,
    AdminModule,
    LoginRouterModule,
    AppRouterModule,
    ErrorModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AppModule { }
