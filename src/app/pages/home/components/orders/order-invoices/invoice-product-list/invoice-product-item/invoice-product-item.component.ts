import { Component, Input, OnInit } from '@angular/core';
import { InvoiceItem } from '../../../../customer-order-list/types/InvoiceItem';

@Component({
  selector: 'app-invoice-product-item',
  templateUrl: './invoice-product-item.component.html',
  styleUrls: ['./invoice-product-item.component.scss'],
})
export class InvoiceProductItemComponent implements OnInit {
  @Input('invoiceItem') invoiceItem!: InvoiceItem;

  constructor() {}

  ngOnInit(): void {
    console.log(this.invoiceItem);
  }
}
