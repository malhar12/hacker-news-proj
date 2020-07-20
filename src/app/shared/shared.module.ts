import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [ListComponent, PaginatorComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, PaginatorComponent]
})
export class SharedModule { }
