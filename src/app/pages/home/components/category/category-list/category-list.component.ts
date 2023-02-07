import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotifierService } from 'angular-notifier';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  getCategories,
  setPublishedStatusNotificationToDefault,
} from '../categoryActions/categoryActions';
import { CategoryData } from '../types/CategoryData';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private notifier: NotifierService
  ) {}
  categories!: CategoryData[];
  p: number = 1;

  ngOnInit(): void {
    this.getCategoriesFromStore();
    this.publishCategoryNotification();
  }

  getCategoriesFromStore() {
    this.store.dispatch(getCategories());
    this.store
      .select((state) => state.categoryState.filteredCategories)
      .subscribe((data: CategoryData[] | null) => {
        if (data) {
          this.categories = data;
        }
      });
  }

  publishCategoryNotification() {
    this.store
      .select((state) => state.categoryState.isCategoryPublishedStatusChanged)
      .subscribe((isPublishedStatusChanged) => {
        if (isPublishedStatusChanged) {
          this.notifier.notify('success', 'published status changed');
          this.store.dispatch(setPublishedStatusNotificationToDefault());
        }
      });
  }
}
