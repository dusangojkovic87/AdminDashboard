import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { downloadPdf } from '../../ordersActions/ordersActions';

@Component({
  selector: 'app-print-download-invoices',
  templateUrl: './print-download-invoices.component.html',
  styleUrls: ['./print-download-invoices.component.scss'],
})
export class PrintDownloadInvoicesComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  downloadPdf() {
    this.store.dispatch(downloadPdf());
  }
}
