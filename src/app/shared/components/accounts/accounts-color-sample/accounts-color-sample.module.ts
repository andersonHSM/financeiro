import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsColorSampleComponent } from './accounts-color-sample.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

const materialImports = [MatDividerModule, MatExpansionModule];

@NgModule({
  declarations: [AccountsColorSampleComponent],
  exports: [AccountsColorSampleComponent],
  imports: [CommonModule, materialImports],
})
export class AccountsColorSampleModule {}
