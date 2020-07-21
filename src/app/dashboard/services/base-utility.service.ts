import { Injectable } from '@angular/core';
import { VoteOrHideChange } from '../models/vote-or-hide-change';
import { CurrentState } from '../models/current-state';

@Injectable()
export class BaseUtilityService {

  constructor() { }

  setCurrentState(pageNo: number, changeItem: VoteOrHideChange = null): void {

    const currentState: CurrentState = JSON.parse(localStorage.getItem('currentState'));

    const change: CurrentState = {
      currentPage: pageNo,
      changes: changeItem ? [...currentState.changes, changeItem] : []
    };
    localStorage.setItem('currentState', JSON.stringify(change));
  }
}
