import { VoteOrHideChange } from './vote-or-hide-change';

export interface CurrentState {
    currentPage: number;
    changes: Array<VoteOrHideChange>;
}
