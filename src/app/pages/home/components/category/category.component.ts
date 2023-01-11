import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import { CategoryState } from './types/CategoryState';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  isDeleteModalOpen: boolean = false;
  isEditCategoryModalOpen: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.categoryState)
      .subscribe((data: CategoryState) => {
        this.isDeleteModalOpen = data.isDeleteModalOpen;
        this.isEditCategoryModalOpen = data.isEditCategoryModalOpen;
      });
  }
}
