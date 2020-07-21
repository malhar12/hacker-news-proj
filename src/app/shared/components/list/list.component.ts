import { Component, OnInit, ChangeDetectionStrategy, Input, IterableDiffer, IterableDiffers, DoCheck, SimpleChanges, ChangeDetectorRef, Output, IterableChangeRecord } from '@angular/core';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, DoCheck {

  @Input('items') items: Array<any> = [];
  @Output() onItemChange: EventEmitter = new EventEmitter();
  _items: Array<any> = [];
  faSortUp = faSortUp;
  private iterableDiffer: IterableDiffer<any>;

  constructor(private iterable: IterableDiffers, private cdr: ChangeDetectorRef) {
    this.iterableDiffer = this.iterable.find(this.items).create();
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'].currentValue) {
      this._items = [...changes['items'].currentValue];
      this.cdr.markForCheck();
    }
  }

  ngDoCheck() {
    const itemChanges = this.iterableDiffer.diff(this.items);

    if (itemChanges) {
      itemChanges.forEachItem((record: IterableChangeRecord<any>) => {
        const index = record.currentIndex;
        this._items.splice(index, 0, record.item);
      });
    }
  }

  getDetails(item: any): string {
    return `${item.title} (<span>${item.url}</span>) by <strong>${item.author}</strong>`;
  }

  upVote(item: any, event: any): void {
    event.preventDefault();
    const updatedItemIndex = this.items.findIndex(_item => {
      return _item.objectId === item.objectId;
    });

    this.items[updatedItemIndex].points++;
    this.onItemChange.emit(this.items[updatedItemIndex]);
  }

}
