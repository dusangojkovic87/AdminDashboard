import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from '../types/Coupon';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  openDeleteCouponModal,
  openEditCouponModal,
} from '../couponsActions/couponActions';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  @Input('coupon') coupon?: Coupon;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  openEditCouponModal(id: string) {
    let couponId = +id;
    this.store.dispatch(openEditCouponModal({ couponId: couponId }));
  }

  openDeleteCouponModal(couponId: string) {
    this.store.dispatch(openDeleteCouponModal({ couponId: +couponId }));
  }
}
