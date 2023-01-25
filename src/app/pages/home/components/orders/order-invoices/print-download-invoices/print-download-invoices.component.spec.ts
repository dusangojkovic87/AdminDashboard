import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDownloadInvoicesComponent } from './print-download-invoices.component';

describe('PrintDownloadInvoicesComponent', () => {
  let component: PrintDownloadInvoicesComponent;
  let fixture: ComponentFixture<PrintDownloadInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDownloadInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintDownloadInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
