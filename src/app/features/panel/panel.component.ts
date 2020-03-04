import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  ActivatedRouteSnapshot
} from "@angular/router";
import { map } from "rxjs/operators";
@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // this.router.events.subscribe(ev => {
    //   if (ev instanceof NavigationEnd)
    //     console.log(this.activatedRoute.snapshot.children[0].data);
    // });
    // console.log(
    //   eval(`this.activatedRoute.snapshot.firstChild.firstChild.pathFromRoot`)
    // );
    // console.log(eval(`this.activatedRoute.snapshot.${this.levels}`));
  }
}
