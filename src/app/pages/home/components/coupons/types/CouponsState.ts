import { Coupon } from './Coupon';

export interface CouponsState {
  coupons: Coupon[];
  errors: string[] | null;
  filteredCoupons: Coupon[];
  isModalOpen: boolean;
  isEditCouponModalOpen: boolean;
  editCouponId: number | null;
}
