import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCouponModalComponent } from './edit-coupon-modal.component';

describe('EditCouponModalComponent', () => {
  let component: EditCouponModalComponent;
  let fixture: ComponentFixture<EditCouponModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCouponModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCouponModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
