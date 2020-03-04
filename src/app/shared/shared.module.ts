import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { RouterModule } from "@angular/router";

const MODULES = [CommonModule, MaterialModule];

const COMPONENTS = [BreadcrumbComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES, RouterModule],
  exports: [MODULES, COMPONENTS]
})
export class SharedModule {}
