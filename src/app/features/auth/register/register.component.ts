import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  hidePassword = true;
  hidePasswordConfirm = true;

  constructor() {}

  ngOnInit(): void {}

  togglePasswordVisibilty() {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibilty() {
    this.hidePasswordConfirm = !this.hidePasswordConfirm;
  }
}
