import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import { accountsActions } from '@app/store';

import { AccountState } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.scss'],
})
export class AccountsViewComponent implements OnInit {
  constructor(private store: Store<{ accounts: AccountState }>) {}

  get accountStore$() {
    return this.store.pipe(map(({ accounts }) => accounts));
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(
        accountsActions.editAccount({ id: 2, name: 'Teste Edição' }),
      );
    }, 1000);
  }
}
