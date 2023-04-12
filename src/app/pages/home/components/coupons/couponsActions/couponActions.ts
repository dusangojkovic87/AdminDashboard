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

export const closeCouponModal = createAction(
  couponsActionTypes.CLOSE_ADD_COUPON_MODAL
);

export const openCouponModal = createAction(
  couponsActionTypes.OPEN_ADD_COUPON_MODAL
);

export const closeEditCouponModal = createAction(
  couponsActionTypes.CLOSE_EDIT_COUPON_MODAL
);

export const openEditCouponModal = createAction(
  couponsActionTypes.OPEN_EDIT_COUPON_MODAL,
  props<{ couponId: number }>()
);

export const openDeleteCouponModal = createAction(
  couponsActionTypes.OPEN_DELETE_COUPON_MODAL,
  props<{ couponId: number }>()
);

export const closeDeleteCouponModal = createAction(
  couponsActionTypes.CLOSE_DELETE_COUPON_MODAL
);

export const deleteCoupon = createAction(
  couponsActionTypes.DELETE_COUPON,
  props<{ id: number }>()
);

export const deleteCouponSuccess = createAction(
  couponsActionTypes.DELETE_COUPON_SUCCESS
);

export const deleteCouponFailed = createAction(
  couponsActionTypes.DELETE_COUPON_FAILED
);
