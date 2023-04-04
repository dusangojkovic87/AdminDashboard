import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { closeCouponModal } from '../couponsActions/couponActions';

@Component({
  selector: 'app-add-coupon-modal',
  templateUrl: './add-coupon-modal.component.html',
  styleUrls: ['./add-coupon-modal.component.scss'],
})
export class AddCouponModalComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  imageUploaded($event: any) {
    console.log($event);
  }

  closeCouponModal() {
    this.store.dispatch(closeCouponModal());
  }
}
