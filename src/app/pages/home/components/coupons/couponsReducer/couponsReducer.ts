import { createReducer, on } from '@ngrx/store';
import {
  closeCouponModal,
  closeDeleteCouponModal,
  closeEditCouponModal,
  deleteCouponFailed,
  deleteCouponSuccess,
  filterCouponsByName,
  getCouponsFail,
  getCouponsSuccess,
  openCouponModal,
  openDeleteCouponModal,
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
  isDeleteCouponModalOpen: false,
  couponToDeleteId: 0,
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
  })),
  on(openDeleteCouponModal, (state: CouponsState, action) => ({
    ...state,
    isDeleteCouponModalOpen: true,
    couponToDeleteId: action.couponId,
  })),
  on(closeDeleteCouponModal, (state: CouponsState, action) => ({
    ...state,
    isDeleteCouponModalOpen: false,
    couponToDeleteId: 0,
    errors: null,
  })),
  on(deleteCouponSuccess, (state: CouponsState, action) => ({
    ...state,
    isDeleteCouponModalOpen: false,
    couponToDeleteId: 0,
    errors: null,
  })),
  on(deleteCouponFailed, (state: CouponsState, action) => ({
    ...state,
    isDeleteCouponModalOpen: false,
    couponToDeleteId: 0,
    errors: ['failed to delete coupon'],
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
