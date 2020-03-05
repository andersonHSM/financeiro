import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "panel",
        loadChildren: () =>
          import("./panel/panel.module").then(panel => panel.PanelModule)
      },
      {
        path: "autenticacao",
        loadChildren: () =>
          import("./auth/auth.module").then(auth => auth.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
