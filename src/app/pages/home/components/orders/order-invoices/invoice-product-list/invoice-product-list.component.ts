import { Component, Input, OnInit } from '@angular/core';
import { InvoiceItem } from '../../../customer-order-list/types/InvoiceItem';

@Component({
  selector: 'app-invoice-product-list',
  templateUrl: './invoice-product-list.component.html',
  styleUrls: ['./invoice-product-list.component.scss'],
})
export class InvoiceProductListComponent implements OnInit {
  @Input('invoices') invoices: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.invoices);
  }
}
