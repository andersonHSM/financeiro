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
      { path: "", redirectTo: "index", pathMatch: "full" },
      {
        path: "index",
        component: HomeComponent
      },
      {
        path: "accounts",
        loadChildren: () =>
          import("./accounts/accounts.module").then(
            accounts => accounts.AccountsModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {}
