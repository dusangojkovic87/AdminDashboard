import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from '../types/Coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  @Input('coupon') coupon?: Coupon;

  constructor() {}

  ngOnInit(): void {}
}
