import { createReducer, on } from '@ngrx/store';
import {
  closeDashboardNav,
  openDashboardNav,
  toggleDashboardNav,
} from '../dashboardNavActions/dashboardNavActions';
import { DashboardState } from '../types/DashboardState';

const intialState: DashboardState = {
  dashboardOpen: true,
};

export const dashboarReducer = createReducer(
  intialState,
  on(toggleDashboardNav, (state, action) => ({
    ...state,
    dashboardOpen: !state.dashboardOpen,
  })),
  on(openDashboardNav, (state, action) => ({
    ...state,
    dashboardOpen: true,
  })),
  on(closeDashboardNav, (state, action) => ({
    ...state,
    dashboardOpen: false,
  }))
);
