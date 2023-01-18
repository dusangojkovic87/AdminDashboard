import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndSearchCouponsComponent } from './add-and-search-coupons.component';

describe('AddAndSearchCouponsComponent', () => {
  let component: AddAndSearchCouponsComponent;
  let fixture: ComponentFixture<AddAndSearchCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndSearchCouponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndSearchCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
