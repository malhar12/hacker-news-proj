import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListComponent } from './components/list/list.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [ListComponent, PaginatorComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ListComponent, PaginatorComponent]
})
export class SharedModule { }
