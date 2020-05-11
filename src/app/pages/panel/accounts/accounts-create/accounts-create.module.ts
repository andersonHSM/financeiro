import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AccountsCreateComponent } from './accounts-create.component';

const materialImports = [MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [AccountsCreateComponent],
  imports: [CommonModule, materialImports, ReactiveFormsModule],
})
export class AccountsCreateModule {}
