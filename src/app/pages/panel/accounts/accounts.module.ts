import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { accountReducer, accountFeatureKey } from '@app/store';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';

import { AccountsViewModule } from './accounts-view/accounts-view.module';
import { AccountsCreateModule } from './accounts-create/accounts-create.module';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    StoreModule.forFeature(accountFeatureKey, accountReducer),
    AccountsCreateModule,
    AccountsViewModule,
  ],
})
export class AccountsModule {}
