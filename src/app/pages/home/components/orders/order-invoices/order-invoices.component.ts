import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';
import {
  getOrders,
  setDownloadPdfToFalse,
} from '../ordersActions/ordersActions';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-order-invoices',
  templateUrl: './order-invoices.component.html',
  styleUrls: ['./order-invoices.component.scss'],
})
export class OrderInvoicesComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  storeSub!: Subscription;
  downloadInvoiceStoreSub!: Subscription;

  routeSub!: Subscription;
  order!: CustomerOrder;
  @ViewChild('invoice') invoice?: ElementRef;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getOrderById();
  }

  ngAfterViewInit(): void {
    this.isDownloadPdfPressed();
  }

  getOrderById() {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.store.dispatch(getOrders());
        this.storeSub = this.store
          .select((state) => state.ordersState.orders)
          .pipe(map((orders) => orders.find((x) => x.id === +params['id'])))
          .subscribe((data: any) => {
            if (data) this.order = data;
          });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.storeSub && this.routeSub && this.downloadInvoiceStoreSub) {
      this.storeSub.unsubscribe();
      this.routeSub.unsubscribe();
      this.downloadInvoiceStoreSub.unsubscribe();
    }
  }

  createInvoicePdf() {
    if (this.invoice?.nativeElement) {
      const content = this.invoice?.nativeElement;

      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();

      doc.html(content, {
        callback: function (doc) {
          doc.save('invoice.pdf');
        },
        x: 0,
        y: 0,
        html2canvas: {
          scale: Math.min(
            width / content.offsetWidth,
            height / content.offsetHeight
          ),
        },
      });
    }
  }

  isDownloadPdfPressed() {
    this.downloadInvoiceStoreSub = this.store
      .select((state) => state.ordersState.downloadInvoices)
      .subscribe((downloadPressed) => {
        if (downloadPressed) {
          this.createInvoicePdf();
          this.store.dispatch(setDownloadPdfToFalse());
        }
      });
  }
}
