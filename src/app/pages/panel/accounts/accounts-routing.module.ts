import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { AccountsCreateComponent } from './accounts-create/accounts-create.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      { path: '', redirectTo: 'view' },
      {
        path: 'view',
        component: AccountsViewComponent,
        data: {
          breadCrumb: 'Suas Contas',
          path: '/accounts/view',
        },
      },
      {
        path: 'create',
        component: AccountsCreateComponent,
        data: {
          breadCrumb: 'Nova Conta',
          path: '/accounts/create',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
