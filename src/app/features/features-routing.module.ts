import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../components/dash/dash-routing.module").then(
            dash => dash.DashRoutingModule
          )
      },
      {
        path: "autenticacao",
        loadChildren: () =>
          import("./auth/auth-routing.module").then(
            auth => auth.AuthRoutingModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
