import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashService } from 'src/app/services/dash.service';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit, OnDestroy {
  private readonly defaultSidenavWidth = '250px';

  destroySubscriptions$: Subject<any> = new Subject();

  /**
   * Variável que controla a abertura da sidenav
   */
  sidenavOpened: boolean;
  /** Representa o elemento que encapusla a sidenav */
  sidenav: HTMLElement;
  /** Representa o elemento que encapsula o conteúdo principal */
  sidenavContent: HTMLElement;

  sidenavHovered: boolean;

  constructor(
    private readonly dashService: DashService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.sidenav = document.getElementById('sidenav');
    this.sidenavContent = document.getElementById('sidenav-content');
    this.openSidenav();
    /**
     * Variável que armazena a url inicial
     * para verificar se o usuário deve ser redirecionado
     * ao topo da página na mudança de rota.
     */
    let urlInicio: string;
    this.router.events
      .pipe(
        takeUntil(this.destroySubscriptions$),
        tap((event) => {
          if (event instanceof NavigationStart) {
            urlInicio = window.location.href;
          } else if (
            event instanceof NavigationEnd ||
            event instanceof NavigationError
          ) {
            /**
             * Variável que armazena a url final
             * para verificar se o usuário deve ser redirecionado
             * ao topo da página na mudança de rota.
             */
            const urlFim = window.location.href;
            if (urlInicio !== urlFim) {
              const scrollToOptions: ScrollToOptions = {
                top: 0,
                left: 0,
                behavior: 'smooth',
              };
              // this.sidenavContent.scrollTo(0, 0);
              this.sidenavContent.scrollTo(scrollToOptions);
            }
          }
        }),
      )
      .subscribe();

    this.dashService
      .getDashState()
      .pipe(takeUntil(this.destroySubscriptions$))
      .subscribe((state) => {
        this.sidenavOpened = state;
        if (this.sidenavOpened) {
          if (this.sidenavHovered) {
            this.sidenavContent.style.marginLeft = this.defaultSidenavWidth;
          }
        } else {
          this.sidenavContent.style.marginLeft = '60px';
        }
      });
  }

  captureSidenavHoverInAndOut(ev: Event) {
    switch (ev.type) {
      case 'mouseover':
        this.sidenavHovered = true;
        if (!this.sidenavOpened) {
          this.sidenav.style.width = this.defaultSidenavWidth;
        }
        break;
      case 'mouseleave':
        this.sidenavHovered = false;
        if (!this.sidenavOpened) {
          this.closeSidenav();
        }
        break;
    }
  }

  openSidenav() {
    this.sidenav.style.width = this.defaultSidenavWidth;
    this.sidenavContent.style.marginLeft = this.defaultSidenavWidth;
  }

  closeSidenav() {
    this.sidenavContent.style.marginLeft = '60px';
    this.sidenav.style.width = '60px';
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
