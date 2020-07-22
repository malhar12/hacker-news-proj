import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './dashboard/components/base/base.component';

const routes: Routes = [
    {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
