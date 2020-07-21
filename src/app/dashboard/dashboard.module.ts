import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BaseComponent } from './components/base/base.component';
import { SharedModule } from '../shared/shared.module';
import { BaseService } from './services/base.service';
import { BaseUtilityService } from './services/base-utility.service';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  providers: [
    BaseService,
    BaseUtilityService
  ]
})
export class DashboardModule { }
