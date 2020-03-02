import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashRoutingModule } from "./dash-routing.module";
import { DashComponent } from "./dash.component";
import { MaterialModule } from "../../material/material.module";

@NgModule({
  declarations: [DashComponent],
  imports: [CommonModule, DashRoutingModule, MaterialModule]
})
export class DashModule {}
