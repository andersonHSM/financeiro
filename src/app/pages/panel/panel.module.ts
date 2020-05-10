import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { DashModule } from '../../shared/components/dash/dash.module';
import { MaterialModule } from 'src/app/material/material.module';

const COMPONENTS = [PanelComponent];
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, PanelRoutingModule, DashModule, MaterialModule],
})
export class PanelModule {}
