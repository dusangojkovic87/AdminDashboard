import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeProfileModalAction,
  toggleProfileModalAction,
} from '../../sharedActions/header.actions';
import { logOutAction } from '../../../pages/auth/authActions/auth.actions';
import { HeaderInterfaceState } from '../../types/headerInterfaceState';
import { toggleDashboardNav } from '../dashboard-nav/dashboardNavActions/dashboardNavActions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isModalOpen: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.headerState.modalIsOpen)
      .subscribe((data) => {
        this.isModalOpen = data;
      });
  }

  toggleModal() {
    this.store.dispatch(toggleProfileModalAction());
  }
  toggleDashboardNav() {
    console.log('test');

    this.store.dispatch(toggleDashboardNav());
  }

  logOut() {
    this.store.dispatch(logOutAction());
  }

  ngOnDestroy(): void {
    this.store.dispatch(closeProfileModalAction());
  }
}
