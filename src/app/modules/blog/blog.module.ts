import { NgModule } from '@angular/core';

import { BlogComponent } from './blog.component';
import { BlogRouterModule } from './blog.router.module';

@NgModule({
  imports: [
    BlogRouterModule
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule { }
