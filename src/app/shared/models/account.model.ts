export interface AccountModel {
  id?: number;
  name: string;
  balance: string;
  iconClass: string;
  backgroundColor: string;
  color: string;
}

export interface AccountState {
  accounts: AccountModel[];
}
