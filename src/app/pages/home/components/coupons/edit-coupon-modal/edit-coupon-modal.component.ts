import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as moment from 'moment';
import { AppState } from 'src/app/appReducer/appReducer';
import { closeEditCouponModal } from '../couponsActions/couponActions';
import { Subscription, filter, map } from 'rxjs';
import { Coupon } from '../types/Coupon';

@Component({
  selector: 'app-edit-coupon-modal',
  templateUrl: './edit-coupon-modal.component.html',
  styleUrls: ['./edit-coupon-modal.component.scss'],
})
export class EditCouponModalComponent implements OnInit, OnDestroy {
  editCouponForm!: FormGroup;
  editCouponIdSub!: Subscription;
  couponSub!: Subscription;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.editCouponForm = this.fb.group({
      image: '',
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      campaignsName: ['', Validators.required],
      code: ['', Validators.required],
      percentage: ['', Validators.required],
      productType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCouponData();
  }

  closeEditCouponModal() {
    this.store.dispatch(closeEditCouponModal());
  }

  updateCoupon() {
    this.editCouponForm.patchValue({
      startDate: moment().format('MMMM Do YYYY'),
    });
    console.log(this.editCouponForm.value);
  }

  imageDropped($event: File) {
    let imageName = $event.name;
    //TODO handle file upload to assets
    this.editCouponForm.patchValue({ image: imageName });
  }

  getCouponData() {
    this.editCouponIdSub = this.store
      .select((state) => state.couponsState.editCouponId)
      .subscribe((editCouponId) => {
        if (editCouponId) {
          this.couponSub = this.store
            .pipe(
              select((state) => state.couponsState),
              map((c) => c.coupons.filter((x) => +x.id === editCouponId))
            )
            .subscribe((editCoupon) => {
              this.setCouponData(editCoupon[0]);
            });
        }
      });
  }

  setCouponData(coupon: Coupon) {
    this.editCouponForm.patchValue({ startDate: coupon.startDate });
    this.editCouponForm.patchValue({ endDate: coupon.endDate });
    this.editCouponForm.patchValue({ campaignsName: coupon.campaignsName });
    this.editCouponForm.patchValue({ code: coupon.code });
    this.editCouponForm.patchValue({ percentage: coupon.percentage });
    this.editCouponForm.patchValue({ productType: coupon.productType });
  }

  ngOnDestroy(): void {
    if (this.editCouponIdSub && this.couponSub) {
      this.couponSub.unsubscribe();
      this.editCouponIdSub.unsubscribe();
    }
  }
}
