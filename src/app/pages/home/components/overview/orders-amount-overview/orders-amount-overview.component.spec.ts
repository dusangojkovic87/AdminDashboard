import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAmountOverviewComponent } from './orders-amount-overview.component';

describe('OrdersAmountOverviewComponent', () => {
  let component: OrdersAmountOverviewComponent;
  let fixture: ComponentFixture<OrdersAmountOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAmountOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersAmountOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
