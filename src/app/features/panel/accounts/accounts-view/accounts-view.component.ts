import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as accountsActions from '../../../../store/actions/account.actions';
import { AccountState } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.scss'],
})
export class AccountsViewComponent implements OnInit {
  constructor(private store: Store<{ account: AccountState }>) {}

  ngOnInit(): void {
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
    this.store.subscribe((res) => console.log(res.account));
  }
}
