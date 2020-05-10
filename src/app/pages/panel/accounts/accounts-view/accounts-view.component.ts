import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { accountsActions } from '@app/store';
import { AccountState } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.scss'],
})
export class AccountsViewComponent implements OnInit {
  constructor(private store: Store<{ accounts: AccountState }>) {}

  ngOnInit(): void {
    this.store.subscribe(({accounts}) => console.log(accounts));
    this.store.dispatch(
      accountsActions.createAccount({
        id: 3,
        name: 'Banese',
        balance: '27000',
        iconClass: 'fa-wallet',
        backgroundColor: 'green',
        color: 'white',
      }),
    );
  }
}
