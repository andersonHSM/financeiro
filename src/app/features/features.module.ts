import { NgModule } from "@angular/core";
import { FeaturesRoutingModule } from "./features-routing.module";
import { SharedModule } from "../shared/shared.module";

const modules = [FeaturesRoutingModule, SharedModule];

@NgModule({
  imports: [modules],
  exports: [modules],
  declarations: []
})
export class FeaturesModule {}
