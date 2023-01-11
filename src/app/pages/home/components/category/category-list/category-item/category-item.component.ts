import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  openDeleteCategoryModal,
  openEditCategoryModal,
} from '../../categoryActions/categoryActions';
import { CategoryData } from '../../types/CategoryData';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() category!: CategoryData;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  openDeleteModal(id: number) {
    this.store.dispatch(openDeleteCategoryModal({ id: id }));
  }

  openEditCategoryModal(category: CategoryData) {
    this.store.dispatch(openEditCategoryModal({ category: category }));
  }
}
