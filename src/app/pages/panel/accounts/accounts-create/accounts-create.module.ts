import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AccountsCreateComponent } from './accounts-create.component';

const materialImports = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [AccountsCreateComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    materialImports,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class AccountsCreateModule {}
