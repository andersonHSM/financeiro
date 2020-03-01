import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"]
})
export class ResetPasswordComponent implements OnInit {
  /**
   * Atributo que controla se a senha estará visível ou não.
   */
  private _hidePassword = true;

  /**
   * Atributo que controla se a confirmação de senha estará visível ou não.
   */
  private _hidePasswordConfirm = true;

  private _token: string | undefined;

  get token(): string | undefined {
    return this._token;
  }

  get hidePasswordConfirm(): boolean {
    return this._hidePasswordConfirm;
  }

  get hidePassword(): boolean {
    return this._hidePassword;
  }

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._token = this.activatedRoute.snapshot.children[0]?.params["token"];
  }

  /**
   * Método que altera a visibilidade da senha.
   * @returns void
   * @params none
   */

  togglePasswordVisibilty(): void {
    this._hidePassword = !this._hidePassword;
  }

  /**
   * Método que altera a visibilidade da confirmação da senha.
   * @returns void
   * @params none
   */
  toggleConfirmPasswordVisibilty(): void {
    this._hidePasswordConfirm = !this._hidePasswordConfirm;
  }
}
