import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceProductListComponent } from './invoice-product-list.component';

describe('InvoiceProductListComponent', () => {
  let component: InvoiceProductListComponent;
  let fixture: ComponentFixture<InvoiceProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
