import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceNumberDateComponent } from './invoice-number-date.component';

describe('InvoiceNumberDateComponent', () => {
  let component: InvoiceNumberDateComponent;
  let fixture: ComponentFixture<InvoiceNumberDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceNumberDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceNumberDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
