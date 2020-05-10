import { createAction, props } from '@ngrx/store';
import { AccountModel } from 'src/app/shared/models/account.model';

export const getAccounts = createAction('[ACCOUNTS] Get Accounts List');

export const createAccount = createAction(
  '[ACCOUNTS] Create New Account',
  props<AccountModel>(),
);

export const accountsActions = {
  getAccounts,
  createAccount,
};

