import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PanelRoutingModule } from "./panel-routing.module";
import { PanelComponent } from "./panel.component";
import { DashModule } from "../../shared/components/dash/dash.module";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountsViewComponent } from './accounts/accounts-view/accounts-view.component';

const COMPONENTS = [PanelComponent];
@NgModule({
  declarations: [COMPONENTS, AccountsComponent, AccountsViewComponent],
  imports: [CommonModule, PanelRoutingModule, DashModule]
})
export class PanelModule {}
