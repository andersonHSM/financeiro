import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'panel', pathMatch: 'full' },
      {
        path: 'panel',
        loadChildren: () =>
          import('./panel/panel.module').then((module) => module.PanelModule),
      },
      {
        path: 'autenticacao',
        loadChildren: () =>
          import('./auth/auth.module').then((module) => module.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
