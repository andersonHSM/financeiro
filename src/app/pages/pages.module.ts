import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

const modules = [PagesRoutingModule, SharedModule];

@NgModule({
  imports: [modules],
  exports: [modules],
  declarations: [],
})
export class PagesModule {}
