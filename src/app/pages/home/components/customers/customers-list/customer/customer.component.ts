import { Component, Input, OnInit } from '@angular/core';
import { CustomersData } from '../../types/CustomersData';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  @Input('customer') customer?: CustomersData;

  constructor() {}

  ngOnInit(): void {}
}
