import { createAction } from '@ngrx/store';
import { dashboardNavActionTypes } from '../dashboardNavActionTypes/dashboardNavActionTypes';

export const toggleDashboardNav = createAction(
  dashboardNavActionTypes.TOGGLE_DASHBOARD_NAV
);

export const openDashboardNav = createAction(
  dashboardNavActionTypes.OPEN_DASHBOARD_NAV
);

export const closeDashboardNav = createAction(
  dashboardNavActionTypes.CLOSE_DASHBOARD_NAV
);
