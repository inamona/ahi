import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
