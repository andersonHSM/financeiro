import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { DashService } from "src/app/services/dash.service";

@Component({
  selector: "app-sidenav-actions",
  templateUrl: "./sidenav-actions.component.html",
  styleUrls: ["./sidenav-actions.component.scss"]
})
export class SidenavActionsComponent implements OnInit, OnChanges {
  @Input() opened: boolean;

  dashState: boolean;

  showTexts = false;

  constructor(private readonly dashService: DashService) {}

  ngOnInit(): void {
    this.dashService.getDashState().subscribe(state => {
      this.dashState = state;
    });
  }

  ngOnChanges(): void {
    // console.log(this.opened);
  }

  toggleSidenav() {
    this.dashState = !this.dashState;
    this.dashService.updateDashState(this.dashState);
  }
}
