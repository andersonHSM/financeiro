import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

import { AccountsViewComponent } from './accounts-view.component';
import { AccountCardComponent } from './account-card/account-card.component';

const materialImports = [MatButtonModule, MatDividerModule, MatRippleModule];


@NgModule({
  declarations: [AccountsViewComponent, AccountCardComponent],
  imports: [CommonModule, materialImports],
  exports: [AccountsViewComponent],
})
export class AccountsViewModule {}
