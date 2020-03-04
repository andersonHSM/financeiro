import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PanelComponent } from "./panel.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { HomeComponent } from "./home/home.component";
import { AccountsViewComponent } from "./accounts/accounts-view/accounts-view.component";

const routes: Routes = [
  {
    path: "",
    component: PanelComponent,
    data: {
      breadCrumb: "Início",
      path: "/",
      icon: "home"
    },
    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "accounts",
        component: AccountsComponent,
        data: {
          breadCrumb: "Contas",
          path: "/accounts",
          icon: "account_balance"
        },
        children: [
          { path: "", redirectTo: "view" },
          {
            path: "view",
            component: AccountsViewComponent,
            data: {
              breadCrumb: "Visualizar",
              path: "/accounts/view",
              icon: "visibility"
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {}
