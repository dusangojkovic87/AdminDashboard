import { createReducer, on } from '@ngrx/store';
import {
  filterCouponsByName,
  getCouponsFail,
  getCouponsSuccess,
} from '../couponsActions/couponActions';
import { CouponsState } from '../types/CouponsState';

const CouponsState: CouponsState = {
  coupons: [],
  errors: null,
  filteredCoupons: [],
};

export const couponsReducer = createReducer(
  CouponsState,
  on(getCouponsSuccess, (state: CouponsState, action) => ({
    ...state,
    coupons: action.coupons,
    filteredCoupons: action.coupons,
  })),
  on(getCouponsFail, (state: CouponsState, action) => ({
    ...state,
    errors: action.errors,
  })),
  on(filterCouponsByName, (state: CouponsState, action) => ({
    ...state,
    filteredCoupons: FilterCouponsByName(state, action.campaignsName),
  }))
);

function FilterCouponsByName(state: CouponsState, action: string) {
  if (action.toLowerCase() === '') {
    return state.coupons;
  }

  return state.coupons.filter((x) =>
    x.campaignsName.toLowerCase().includes(action.toLowerCase())
  );
}
