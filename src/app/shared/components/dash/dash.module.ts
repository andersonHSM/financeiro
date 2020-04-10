import { NgModule } from '@angular/core';

import { DashComponent } from './dash.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { ToolbarActionsComponent } from './toolbar/toolbar-actions/toolbar-actions.component';
import { SidenavActionsComponent } from './sidenav/sidenav-actions/sidenav-actions.component';

const COMPONENTS = [];
@NgModule({
  declarations: [
    DashComponent,
    ToolbarActionsComponent,
    SidenavActionsComponent,
  ],
  imports: [SharedModule, RouterModule],
  exports: [DashComponent],
})
export class DashModule {}
