import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

import { accountReducer, accountFeatureKey } from '@app/store';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AccountsViewModule } from './accounts-view/accounts-view.module';


const COMPONENTS = [AccountsComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    StoreModule.forFeature(accountFeatureKey, accountReducer),
    AccountsViewModule
  ],
})
export class AccountsModule {}
