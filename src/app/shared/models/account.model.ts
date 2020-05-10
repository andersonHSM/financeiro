export interface AccountModel {
  id?: number;
  name: string;
  balance: string;
  iconClass: string;
  backgroundColor: string;
  color: string;
  isGroupal: boolean;
}

export type AccountState = AccountModel[];
