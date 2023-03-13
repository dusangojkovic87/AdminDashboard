import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { logOutAction } from 'src/app/pages/auth/authActions/auth.actions';
import {
  closeDashboardNav,
  openDashboardNav,
} from './dashboardNavActions/dashboardNavActions';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss'],
})
export class DashboardNavComponent implements OnInit {
  isDashboardOpen: boolean = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.dashboardState.dashboardOpen)
      .subscribe((data) => {
        this.isDashboardOpen = data;
      });
  }

  closeDashboardNav() {
    this.store.dispatch(closeDashboardNav());
  }

  logOut() {
    this.store.dispatch(logOutAction());
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    if (event.target.innerWidth >= 900) {
      this.store.dispatch(openDashboardNav());
    }
  }

  closeDashNav() {
    if (window.innerWidth < 900) {
      this.store.dispatch(closeDashboardNav());
    }

    return;
  }
}
