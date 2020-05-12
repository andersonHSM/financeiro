import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts-create',
  templateUrl: './accounts-create.component.html',
  styleUrls: ['./accounts-create.component.scss'],
})
export class AccountsCreateComponent implements OnInit {
  // TODO - alterar para a interface correta
  accountsColorsArray: { backgroundColor: string; color: string }[] = [
    { backgroundColor: 'white', color: 'black' },
    { backgroundColor: 'rgb(138, 5, 190)', color: 'white' },
    { backgroundColor: 'green', color: 'white' },
    { backgroundColor: '#082872', color: 'white' },
  ];

  createAccountForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.createAccountForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      balance: this.formBuilder.control(''),
      iconClass: this.formBuilder.control('', [Validators.required]),
      backgroundColor: this.formBuilder.control('', [Validators.required]),
      color: this.formBuilder.control('', [Validators.required]),
      isGroupal: this.formBuilder.control('', [Validators.required]),
    });
  }

  checkColorPicker(accountColor) {
    console.log(accountColor);
  }
}
