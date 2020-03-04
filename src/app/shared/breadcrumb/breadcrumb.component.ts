import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  NavigationEnd
} from "@angular/router";

interface Breadcrumb {
  breadCrumb: string;
  path: string;
  icon: string;
}

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})
export class BreadcrumbComponent implements OnInit {
  snapshotFromRoot: ActivatedRouteSnapshot[];

  levels = "firstChild";

  breadCrumbs: Breadcrumb[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getBreadcrumbs();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.levels = "firstChild";
        this.getBreadcrumbs();
      }
    });
  }

  getBreadcrumbs() {
    this.breadCrumbs.length = 0;
    while (eval(`this.activatedRoute.snapshot.${this.levels}`) !== null) {
      this.snapshotFromRoot = eval(
        `this.activatedRoute.snapshot.${this.levels}.pathFromRoot`
      );
      this.levels = this.levels + ".firstChild";
    }

    this.snapshotFromRoot.forEach(level => {
      if (level.data.breadCrumb) {
        this.breadCrumbs.push(level.data as Breadcrumb);
      }
    });
    console.log(
      this.breadCrumbs.filter((breadcrum, i, array) => {
        return array.indexOf(breadcrum) === i;
      })
    );
  }

  /* getBreadcrumbsRecursively() {
    this.snapshotFromRoot = eval(
      `this.activatedRoute.snapshot.${this.levels}.pathFromRoot`
    );
    this.levels = this.levels + ".firstChild";
    if (eval(`this.activatedRoute.snapshot.${this.levels}`) === null) {
      return;
    }
    this.getBreadcrumbsRecursively();
  } */
}
