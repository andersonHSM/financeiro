import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';

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
          breadCrumb: 'Contas',
          path: '/accounts/view',
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
