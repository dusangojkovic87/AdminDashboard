import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinct, map, Subscription, switchMap } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  addCategory,
  filterByCategoryInput,
  filterByCategorySelect,
  openAddCategoryModal,
} from '../categoryActions/categoryActions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss'],
})
export class AddCategoryFormComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;
  productType: string = 'all';
  productTypeInput: string = '';
  productTypeList: string[] = [];
  categoryForm!: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getListOfCategoriesFromStore();
  }

  openCategoryModal() {
    this.store.dispatch(openAddCategoryModal());
  }

  getListOfCategoriesFromStore() {
    this.storeSub = this.store
      .select((state) => state.categoryState)
      .pipe(
        switchMap((c) => c.categories.map((s) => s.productType)),
        distinct()
      )
      .subscribe((data: string) => {
        this.productTypeList.push(data);
      });
  }

  categorySelect() {
    this.store.dispatch(
      filterByCategorySelect({ productType: this.productType })
    );
  }

  filterCategoryByInput() {
    this.store.dispatch(
      filterByCategoryInput({ productType: this.productTypeInput })
    );
  }

  ngOnDestroy(): void {
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
