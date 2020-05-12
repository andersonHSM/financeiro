import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsColorSampleComponent } from './accounts-color-sample.component';

@NgModule({
  declarations: [AccountsColorSampleComponent],
  exports: [AccountsColorSampleComponent],
  imports: [CommonModule],
})
export class AccountsColorSampleModule {}
