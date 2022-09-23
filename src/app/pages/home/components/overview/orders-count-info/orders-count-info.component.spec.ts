import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCountInfoComponent } from './orders-count-info.component';

describe('OrdersCountInfoComponent', () => {
  let component: OrdersCountInfoComponent;
  let fixture: ComponentFixture<OrdersCountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersCountInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersCountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
