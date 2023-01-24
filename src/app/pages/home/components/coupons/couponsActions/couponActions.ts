import { createAction, props } from '@ngrx/store';
import { couponsActionTypes } from '../couponsActionTypes/couponsActionTypes';
import { Coupon } from '../types/Coupon';

export const getCoupons = createAction(couponsActionTypes.GET_COUPONS);

export const getCouponsSuccess = createAction(
  couponsActionTypes.GET_COUPONS_SUCCESS,
  props<{ coupons: Coupon[] }>()
);

export const getCouponsFail = createAction(
  couponsActionTypes.GET_COUPONS_FAIL,
  props<{ errors: any }>()
);

export const filterCouponsByName = createAction(
  couponsActionTypes.FILTER_COUPONS_BY_NAME,
  props<{ campaignsName: string }>()
);
