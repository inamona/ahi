import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

import { AdminRouterModule } from './admin.router.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRouterModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageUsersComponent
  ]
})
export class AdminModule { }
