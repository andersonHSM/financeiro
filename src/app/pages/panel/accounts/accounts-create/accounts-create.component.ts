import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts-create',
  templateUrl: './accounts-create.component.html',
  styleUrls: ['./accounts-create.component.scss'],
})
export class AccountsCreateComponent implements OnInit {
  createAccountForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  initForm(): void {
    this.createAccountForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
    });
  }
}
