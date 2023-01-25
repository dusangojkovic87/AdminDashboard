import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceProductItemComponent } from './invoice-product-item.component';

describe('InvoiceProductItemComponent', () => {
  let component: InvoiceProductItemComponent;
  let fixture: ComponentFixture<InvoiceProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceProductItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
