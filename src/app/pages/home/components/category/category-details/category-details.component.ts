import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  closeDeleteProductModal,
  deleteProductById,
  getCategoryById,
} from '../categoryActions/categoryActions';
import { Subscription } from 'rxjs';
import { Product } from '../../overview/types/Product';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit, OnDestroy {
  products?: Product[];
  categorySub!: Subscription;
  isModalOpenSub!: Subscription;
  isDeleteProductModalOpen: boolean = false;
  p: number = 1;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const categoryId = Number(params['id']);
      if (categoryId) {
        this.store.dispatch(getCategoryById({ id: categoryId }));
      }
    });

    this.getCategoryByIdFromStore();
    this.isDeleteProductModalOpenFromStore();
  }

  getCategoryByIdFromStore() {
    this.categorySub = this.store
      .select((state) => state.categoryState.categoryById)
      .subscribe((category) => {
        this.products = category.products;
      });
  }

  isDeleteProductModalOpenFromStore() {
    this.isModalOpenSub = this.store
      .select((state) => state.categoryState.isDeleteProductModalOpen)
      .subscribe((isOpen) => {
        this.isDeleteProductModalOpen = isOpen;
      });
  }

  closeProductModal() {
    this.store.dispatch(closeDeleteProductModal());
  }

  deleteProductById() {
    this.store
      .select((state) => state.categoryState.productToDeleteId)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(deleteProductById({ id: id }));
          this.store.dispatch(closeDeleteProductModal());
        }
      });
  }

  ngOnDestroy() {
    if (this.categorySub && this.isModalOpenSub) {
      this.categorySub.unsubscribe();
      this.isModalOpenSub.unsubscribe();
    }
  }
}
