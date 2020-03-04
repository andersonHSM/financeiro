import { Component, OnInit, OnDestroy } from "@angular/core";
import { DashService } from "src/app/services/dash.service";
import { Subject } from "rxjs";
import { tap, takeUntil } from "rxjs/operators";
import { MatSidenav } from "@angular/material/sidenav";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.scss"]
})
export class DashComponent implements OnInit, OnDestroy {
  private readonly defaultSidenavWidth = "180px";

  destroySubscriptions$: Subject<any> = new Subject();

  /**
   * Variável que controla a abertura da sidenav
   */
  sidenavOpened: boolean;
  sidenav: HTMLElement;
  sidenavContent: HTMLElement;

  constructor(
    private readonly dashService: DashService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events();
    this.sidenav = document.getElementById("sidenav");
    this.sidenavContent = document.getElementById("sidenav-content");
    this.dashService
      .getDashState()
      .pipe(takeUntil(this.destroySubscriptions$))
      .subscribe(state => {
        this.sidenavOpened = state;
        if (this.sidenavOpened) {
          this.sidenav.style.width = this.defaultSidenavWidth;
          this.sidenavContent.style.marginLeft = "180px";
        } else {
          this.sidenavContent.style.marginLeft = "60px";
          this.sidenav.style.width = "60px";
        }
      });
  }

  ngOnDestroy(): void {
    this.destroySubscriptions$.next();
    this.destroySubscriptions$.complete();
  }

  changeSidenavState(): void {
    this.sidenavOpened = !this.sidenavOpened;
    this.dashService.updateDashState(this.sidenavOpened);
  }
}
