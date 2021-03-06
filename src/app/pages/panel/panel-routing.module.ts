import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { AccountsViewComponent } from './accounts/accounts-view/accounts-view.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        component: HomeComponent,
        data: {
          breadCrumb: 'Início',
          path: '/',
        },
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./accounts/accounts.module').then(
            (module) => module.AccountsModule,
          ),
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./groups/groups.module').then(
            (module) => module.GroupsModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
