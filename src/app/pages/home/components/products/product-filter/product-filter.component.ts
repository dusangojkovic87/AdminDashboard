import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinct, filter, map, switchMap } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  filterProductsByCategory,
  filterProductsByName,
  openProductsModal,
} from '../productActions/productActions';
import { FilterProductTerms } from '../types/FilterProductTerms';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  categories: string[] = [];

  productName: string = '';
  category: string = 'all';
  productOrder: string = 'asc';

  ngOnInit(): void {
    this.getCategoriesFromStore();
  }

  openAddProductModal() {
    this.store.dispatch(openProductsModal());
  }

  filterProductsByName() {
    this.store.dispatch(
      filterProductsByName({ productName: this.productName })
    );
  }

  filterProductsByCategory() {
    console.log('radi');

    this.store.dispatch(filterProductsByCategory({ category: this.category }));
  }

  getCategoriesFromStore() {
    this.store
      .select((state) => state.productsState.products)
      .pipe(
        switchMap((p) => p.map((x) => x.category)),
        distinct()
      )
      .subscribe((data) => {
        this.categories.push(data);
      });
  }
}
