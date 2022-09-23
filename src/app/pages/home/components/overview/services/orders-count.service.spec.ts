import { TestBed } from '@angular/core/testing';

import { OrdersCountService } from './orders-count.service';

describe('OrdersCountService', () => {
  let service: OrdersCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
