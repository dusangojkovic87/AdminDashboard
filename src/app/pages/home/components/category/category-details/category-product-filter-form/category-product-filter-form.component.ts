import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeProductsModal,
  filterProductsByCategory,
  openProductsModal,
} from '../../../products/productActions/productActions';
import {
  filterCategoryProductsByName,
  filterCategoryProductsByPrice,
} from '../../categoryActions/categoryActions';

@Component({
  selector: 'app-category-product-filter-form',
  templateUrl: './category-product-filter-form.component.html',
  styleUrls: ['./category-product-filter-form.component.scss'],
})
export class CategoryProductFilterFormComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  openAddProductModal() {
    this.store.dispatch(openProductsModal());
  }

  searchByName($event: any) {
    let name = $event.target.value;
    this.store.dispatch(filterCategoryProductsByName({ name: name }));
  }

  orderProductsByPrice($event: any) {
    let price = $event.target.value;
    this.store.dispatch(filterCategoryProductsByPrice({ price: price }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(closeProductsModal());
  }
}
