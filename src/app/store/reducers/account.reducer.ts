import { Action, createReducer, on } from '@ngrx/store';

import { AccountsState } from '../state/account.state';
import * as AccountsActions from '../actions/account.actions';

import { AccountState } from 'src/app/shared/models/account.model';

const accountsReducer = createReducer(
  AccountsState,
  on(AccountsActions.getAccounts, (oldState) => oldState),
  on(AccountsActions.createAccount, (oldState, account) => [
    ...oldState,
    account,
  ]),
);

export function reducer(state: AccountState | undefined, action: Action) {
  return accountsReducer(state, action);
}

export const accountFeatureKey = 'accounts';
