import { createAction, props } from '@ngrx/store';
import { AccountModel } from 'src/app/shared/models/account.model';

const getAccounts = createAction('[ACCOUNTS] Get Accounts List');

const createAccount = createAction(
  '[ACCOUNTS] Create New Account',
  props<AccountModel>(),
);

const editAccount = createAction(
  '[ACCOUNTS] Edit Existing Account',
  props<any>(),
);

export const accountsActions = {
  createAccount,
  editAccount,
  getAccounts,
};
