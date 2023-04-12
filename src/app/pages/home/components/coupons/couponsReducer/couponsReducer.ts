import { createReducer, on } from '@ngrx/store';
import {
  closeCouponModal,
  closeEditCouponModal,
  filterCouponsByName,
  getCouponsFail,
  getCouponsSuccess,
  openCouponModal,
  openEditCouponModal,
} from '../couponsActions/couponActions';
import { CouponsState } from '../types/CouponsState';

const CouponsState: CouponsState = {
  coupons: [],
  errors: null,
  filteredCoupons: [],
  isModalOpen: false,
  isEditCouponModalOpen: false,
  editCouponId: null,
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
  })),
  on(closeCouponModal, (state: CouponsState, action) => ({
    ...state,
    isModalOpen: false,
  })),
  on(openCouponModal, (state: CouponsState, action) => ({
    ...state,
    isModalOpen: true,
  })),
  on(openEditCouponModal, (state: CouponsState, action) => ({
    ...state,
    isEditCouponModalOpen: true,
    editCouponId: action.couponId,
  })),
  on(closeEditCouponModal, (state: CouponsState, action) => ({
    ...state,
    isEditCouponModalOpen: false,
    editCouponId: null,
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
