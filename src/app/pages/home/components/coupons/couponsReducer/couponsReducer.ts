import { createReducer, on } from '@ngrx/store';
import {
  getCouponsFail,
  getCouponsSuccess,
} from '../couponsActions/couponActions';
import { CouponsState } from '../types/CouponsState';

const CouponsState: CouponsState = {
  coupons: null,
  errors: null,
};

export const couponsReducer = createReducer(
  CouponsState,
  on(getCouponsSuccess, (state: CouponsState, action) => ({
    ...state,
    coupons: action.coupons,
  })),
  on(getCouponsFail, (state: CouponsState, action) => ({
    ...state,
    errors: action.errors,
  }))
);
