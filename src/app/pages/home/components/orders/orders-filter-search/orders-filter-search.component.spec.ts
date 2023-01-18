import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersFilterSearchComponent } from './orders-filter-search.component';

describe('OrdersFilterSearchComponent', () => {
  let component: OrdersFilterSearchComponent;
  let fixture: ComponentFixture<OrdersFilterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersFilterSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
