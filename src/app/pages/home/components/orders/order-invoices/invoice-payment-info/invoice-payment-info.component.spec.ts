import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaymentInfoComponent } from './invoice-payment-info.component';

describe('InvoicePaymentInfoComponent', () => {
  let component: InvoicePaymentInfoComponent;
  let fixture: ComponentFixture<InvoicePaymentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePaymentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicePaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
