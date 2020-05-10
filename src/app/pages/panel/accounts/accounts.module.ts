import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { AccountsComponent } from './accounts.component';

const COMPONENTS = [AccountsViewComponent, AccountsComponent];
const MATERIAL_IMPORTS = [MatButtonModule, MatDividerModule, MatRippleModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, AccountsRoutingModule, MATERIAL_IMPORTS],
})
export class AccountsModule {}
