import { createReducer, on } from '@ngrx/store';
import { getRecentOrdersSuccess } from '../overviewActions/recentOrdersActions';
import { RecentOrdersState } from '../types/RecentOrdersState';
import { RecentOrders } from '../types/recentOrders';

const RecentOrdersState: RecentOrdersState = {
  recentOrders: [],
};

export const recentOrdersReducer = createReducer(
  RecentOrdersState,
  on(getRecentOrdersSuccess, (state: RecentOrdersState, action) => ({
    ...state,
    recentOrders: action.orders,
  }))
);
