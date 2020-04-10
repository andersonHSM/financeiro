import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { AccountsComponent } from './accounts.component';

const COMPONENTS = [AccountsViewComponent, AccountsComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, AccountsRoutingModule],
})
export class AccountsModule {}
