import { NgModule } from "@angular/core";

import { DashComponent } from "./dash.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared.module";
import { ToolbarActionsComponent } from "./toolbar/toolbar-actions/toolbar-actions.component";

@NgModule({
  declarations: [DashComponent, ToolbarActionsComponent],
  imports: [SharedModule, RouterModule],
  exports: [DashComponent]
})
export class DashModule {}
