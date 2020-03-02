import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { FeaturesRoutingModule } from "./features-routing.module";
import { CommonModule } from "@angular/common";
import { DashModule } from "../components/dash/dash.module";

const modules = [AuthModule, FeaturesRoutingModule, CommonModule, DashModule];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class FeaturesModule {}
