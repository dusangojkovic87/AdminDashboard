import { createReducer, on } from '@ngrx/store';
import {
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
  }))
);
