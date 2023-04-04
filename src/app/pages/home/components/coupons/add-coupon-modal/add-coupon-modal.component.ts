import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-coupon-modal',
  templateUrl: './add-coupon-modal.component.html',
  styleUrls: ['./add-coupon-modal.component.scss'],
})
export class AddCouponModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageUploaded($event: any) {
    console.log($event);
  }
}
