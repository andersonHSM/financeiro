import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { MaterialModule } from "../../material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {}
