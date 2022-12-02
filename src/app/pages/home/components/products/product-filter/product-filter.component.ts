import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { openProductsModal } from '../productActions/productActions';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  openAddProductModal() {
    this.store.dispatch(openProductsModal());
  }
}
