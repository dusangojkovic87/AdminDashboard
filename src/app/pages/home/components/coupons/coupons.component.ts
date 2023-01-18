import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { getCoupons } from './couponsActions/couponActions';
import { Coupon } from './types/Coupon';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
  coupons: Coupon[] = [];
  p: number = 1;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCouponsAction();
  }

  getCouponsAction() {
    this.store.dispatch(getCoupons());
    this.getCouponsFromStore();
  }

  getCouponsFromStore() {
    this.store
      .select((state) => state.couponsState.coupons)
      .subscribe((data) => {
        if (data) {
          this.coupons = data;
        }
      });
  }
}
