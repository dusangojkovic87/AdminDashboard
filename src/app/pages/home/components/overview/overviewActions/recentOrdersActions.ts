import { createAction, props } from '@ngrx/store';
import { recentOrderActionTypes } from '../overviewActionTypes/recentOrdersTypes';
import { RecentOrders } from '../types/recentOrders';

export const getRecentOrders = createAction(
  recentOrderActionTypes.GET_RECENT_ORDERS
);

export const getRecentOrdersSuccess = createAction(
  recentOrderActionTypes.GET_RECENT_ORDERS_SUCCESS,
  props<{ orders: RecentOrders[] }>()
);

export const getRecentOrdersFail = createAction(
  recentOrderActionTypes.GET_RECENT_ORDERS_FAIL,
  props<{ errors: any }>()
);
