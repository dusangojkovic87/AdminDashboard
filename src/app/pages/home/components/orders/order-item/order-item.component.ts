import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input('order') order?: CustomerOrder;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToInvoices(order: CustomerOrder) {
    this.router.navigate(['/orders/invoices', order.id]);
  }
}
