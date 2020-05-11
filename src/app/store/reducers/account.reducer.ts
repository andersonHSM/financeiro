import { Action, createReducer, on } from '@ngrx/store';

import { AccountsState } from '../state/account.state';
import { accountsActions } from '../actions/account.actions';

import { AccountState } from 'src/app/shared/models/account.model';
import { arraysAreNotAllowedMsg } from '@ngrx/store/src/models';

const accountsReducer = createReducer(
  AccountsState,
  on(accountsActions.getAccounts, (oldState) => oldState),
  on(accountsActions.createAccount, (oldState, account) => [
    ...oldState,
    account,
  ]),
  on(accountsActions.editAccount, (oldState, accountData) => {
    const newState: AccountState = [...oldState];

    const accountToEditIndex = newState.findIndex(
      (account) => account.id === accountData.id,
    );

    const item = { ...newState[accountToEditIndex] };

    item.name = accountData.name;

    newState[accountToEditIndex] = item;

    return newState;
  }),
);

export function reducer(state: AccountState | undefined, action: Action) {
  return accountsReducer(state, action);
}

export const accountFeatureKey = 'accounts';
