import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { FeaturesRoutingModule } from "./features-routing.module";
import { CommonModule } from "@angular/common";

const modules = [AuthModule, FeaturesRoutingModule, CommonModule];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules]
})
export class FeaturesModule {}
