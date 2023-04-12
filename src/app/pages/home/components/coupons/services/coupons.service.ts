import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon } from '../types/Coupon';

@Injectable({
  providedIn: 'root',
})
export class CouponsService {
  constructor(private http: HttpClient) {}

  getCoupons(): Observable<Coupon[]> {
    let baseUrl = environment.baseUrl;
    return this.http.get<Coupon[]>(
      baseUrl + '/assets/fakeBackend/coupons/coupons.json'
    );
  }

  deleteCoupon(couponId: number) {
    //fake delete to server
    return of(couponId);
  }
}
