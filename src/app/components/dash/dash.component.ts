import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.scss"]
})
export class DashComponent implements OnInit {
  /**
   * Variável que controla a abertura da sidenav
   */
  sidenavOpened = true;

  constructor() {}

  ngOnInit(): void {}
}
