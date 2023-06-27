import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { getCategoryById } from '../categoryActions/categoryActions';
import { Observable, Subscription } from 'rxjs';
import { CategoryData } from '../types/CategoryData';
import { Product } from '../../overview/types/Product';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit, OnDestroy {
  products?: Product[];
  categorySub!: Subscription;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const categoryId = Number(params['id']);
      if (categoryId) {
        this.store.dispatch(getCategoryById({ id: categoryId }));
      }
    });

    this.getCategoryByIdFromStore();
  }

  getCategoryByIdFromStore() {
    this.categorySub = this.store
      .select((state) => state.categoryState.categoryById)
      .subscribe((category) => {
        this.products = category.products;
      });
  }

  ngOnDestroy() {
    if (this.categorySub) {
      this.categorySub.unsubscribe();
    }
  }
}
