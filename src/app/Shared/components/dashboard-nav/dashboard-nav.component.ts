import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { logOutAction } from 'src/app/pages/auth/authActions/auth.actions';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss'],
})
export class DashboardNavComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  logOut() {
    this.store.dispatch(logOutAction());
  }
}
