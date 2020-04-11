import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  NavigationEnd,
} from "@angular/router";

interface Breadcrumb {
  breadCrumb: string;
  path: string;
  icon: string;
}

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
  snapshotFromRoot: ActivatedRouteSnapshot[];

  levels = "firstChild";

  pageInfo: Breadcrumb;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getBreadcrumbs();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.levels = "firstChild";
        this.getBreadcrumbs();
      }
    });
  }

  getBreadcrumbs() {
    while (eval(`this.activatedRoute.snapshot.${this.levels}`) !== null) {
      this.snapshotFromRoot = eval(
        `this.activatedRoute.snapshot.${this.levels}.pathFromRoot`
      );
      this.levels = this.levels + ".firstChild";
    }

    this.pageInfo = this.snapshotFromRoot[this.snapshotFromRoot.length - 1]
      .data as Breadcrumb;
  }
}
