import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinct, Subscription, switchMap } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  filterProductsByCategory,
  filterProductsByName,
  filterProductsByOrder,
  openProductsModal,
} from '../productActions/productActions';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;
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
    this.store.dispatch(filterProductsByCategory({ category: this.category }));
  }

  filterProductsByOrder() {
    this.store.dispatch(
      filterProductsByOrder({ productOrder: this.productOrder })
    );
  }

  getCategoriesFromStore() {
    this.storeSub = this.store
      .select((state) => state.productsState.products)
      .pipe(
        switchMap((p) => p.map((x) => x.category)),
        distinct()
      )
      .subscribe((data) => {
        this.categories.push(data);
      });
  }

  ngOnDestroy() {
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
