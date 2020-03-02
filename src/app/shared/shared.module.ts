import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";

const ELEMENTS = [CommonModule, MaterialModule];

@NgModule({
  declarations: [],
  imports: [ELEMENTS],
  exports: [ELEMENTS]
})
export class SharedModule {}
