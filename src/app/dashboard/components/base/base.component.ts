import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { BaseUtilityService } from '../../services/base-utility.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent implements OnInit {

  itemList: Array<any>;

  constructor(private baseService: BaseService, private baseUtilityService: BaseUtilityService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems(): void {
    this.baseService.getItemsForPage(1)
        .subscribe(response => {
          this.itemList = response.hits;
          this.baseUtilityService.setCurrentState(response.page);
          this.cdr.markForCheck();
        });
  }

  onItemChange(event: any): void {
    this.baseUtilityService.setCurrentState(1, event);
  }

}
