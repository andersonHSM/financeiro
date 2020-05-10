import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { AccountsComponent } from './accounts.component';

import { accountReducer } from '@app/store';

const COMPONENTS = [AccountsViewComponent, AccountsComponent];
const MATERIAL_IMPORTS = [MatButtonModule, MatDividerModule, MatRippleModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MATERIAL_IMPORTS,
    StoreModule.forFeature(
      accountReducer.accountFeatureKey,
      accountReducer.reducer,
    ),
  ],
})
export class AccountsModule {}
