import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  filterCouponsByName,
  openCouponModal,
} from '../couponsActions/couponActions';

@Component({
  selector: 'app-add-and-search-coupons',
  templateUrl: './add-and-search-coupons.component.html',
  styleUrls: ['./add-and-search-coupons.component.scss'],
})
export class AddAndSearchCouponsComponent implements OnInit {
  couponName: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  filterCoupnsByName() {
    this.store.dispatch(
      filterCouponsByName({ campaignsName: this.couponName })
    );
  }

  openCouponModal() {
    this.store.dispatch(openCouponModal());
  }
}
