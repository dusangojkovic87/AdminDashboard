import { Coupon } from './Coupon';

export interface CouponsState {
  coupons: Coupon[] | null;
  errors: string[] | null;
}
