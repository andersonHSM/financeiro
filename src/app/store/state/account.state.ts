import { AccountState } from '../../shared/models/account.model';

export const AccountsState: AccountState = [
  {
    id: 1,
    name: 'Carteira',
    balance: '150',
    iconClass: 'fa-wallet',
    backgroundColor: 'white',
    color: 'black',
    isGroupal: false,
  },
  {
    id: 2,
    name: 'NuConta',
    balance: '200',
    iconClass: 'fa-donate',
    backgroundColor: 'rgb(138, 5, 190)',
    color: 'white',
    isGroupal: false,
  },
  {
    id: 3,
    name: 'Banese',
    balance: '27000',
    iconClass: 'fa-piggy-bank',
    backgroundColor: 'green',
    color: 'white',
    isGroupal: false,
  },
  {
    id: 4,
    name: 'Viagem',
    balance: '750',
    backgroundColor: '#082872',
    color: 'white',
    isGroupal: true,
    iconClass: 'fa-users',
  },
];
