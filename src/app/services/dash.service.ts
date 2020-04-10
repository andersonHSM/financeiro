import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashService {
  private dashState$ = new BehaviorSubject(true);

  constructor() {}

  updateDashState(state: boolean) {
    this.dashState$.next(state);
  }

  getDashState(): Observable<boolean> {
    return this.dashState$.asObservable();
  }
}
