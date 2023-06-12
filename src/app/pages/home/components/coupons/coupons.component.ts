import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeDeleteCouponModal,
  deleteCoupon,
  getCoupons,
} from './couponsActions/couponActions';
import { Coupon } from './types/Coupon';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
  coupons: Coupon[] = [];
  p: number = 1;
  isModalOpen: boolean = false;
  isEditCouponModalOpen: boolean = false;
  isDeleteCouponModalOpen: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCouponsAction();
    this.isCouponModalOpen();
    this.isEditCoupnModalOpen();
    this.isDelteCouponModalOpen();
  }

  getCouponsAction() {
    this.store.dispatch(getCoupons());
    this.getCouponsFromStore();
  }

  getCouponsFromStore() {
    this.store
      .select((state) => state.couponsState.filteredCoupons)
      .subscribe((data) => {
        if (data) {
          this.coupons = data;
        }
      });
  }

  isCouponModalOpen() {
    this.store
      .select((state) => state.couponsState.isModalOpen)
      .subscribe((data) => {
        this.isModalOpen = data;
      });
  }

  isEditCoupnModalOpen() {
    this.store
      .select((state) => state.couponsState.isEditCouponModalOpen)
      .subscribe((data) => {
        this.isEditCouponModalOpen = data;
      });
  }

  isDelteCouponModalOpen() {
    this.store
      .select((state) => state.couponsState.isDeleteCouponModalOpen)
      .subscribe((data) => {
        this.isDeleteCouponModalOpen = data;
      });
  }

  closeDeleteCouponModal() {
    this.store.dispatch(closeDeleteCouponModal());
  }

  deleteCoupon() {
    this.store
      .select((state) => state.couponsState.couponToDeleteId)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(deleteCoupon({ id: id }));
        }
      });
  }
}
