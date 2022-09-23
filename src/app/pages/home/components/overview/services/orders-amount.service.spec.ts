import { TestBed } from '@angular/core/testing';

import { OrdersAmountService } from './orders-amount.service';

describe('OrdersAmountService', () => {
  let service: OrdersAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
