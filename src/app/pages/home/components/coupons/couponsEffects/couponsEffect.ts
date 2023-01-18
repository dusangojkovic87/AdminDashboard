import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getCouponsFail,
  getCouponsSuccess,
} from '../couponsActions/couponActions';
import { couponsActionTypes } from '../couponsActionTypes/couponsActionTypes';
import { CouponsService } from '../services/coupons.service';
import { Coupon } from '../types/Coupon';

@Injectable()
export class CouponsEffect {
  constructor(
    private $actions: Actions,
    private couponsService: CouponsService
  ) {}

  $getCoupons = createEffect(() =>
    this.$actions.pipe(
      ofType(couponsActionTypes.GET_COUPONS),
      switchMap(() => {
        return this.couponsService.getCoupons();
      }),
      map((coupons: Coupon[]) => {
        return getCouponsSuccess({ coupons: coupons });
      }),
      catchError((error) => {
        return of(getCouponsFail({ errors: error }));
      })
    )
  );
}
