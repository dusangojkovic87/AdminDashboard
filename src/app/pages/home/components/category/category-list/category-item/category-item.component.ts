import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  openDeleteCategoryModal,
  openEditCategoryModal,
  setPublishedStatusNotificationToDefault,
  toggleCategoryPublishedStatus,
} from '../../categoryActions/categoryActions';
import { CategoryData } from '../../types/CategoryData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() category!: CategoryData;
  categoryFormGroup!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryFormGroup = this.fb.group({
      published: [this.category.published, Validators.required],
    });
  }

  openDeleteModal(id: number) {
    this.store.dispatch(openDeleteCategoryModal({ id: id }));
  }

  openEditCategoryModal(category: CategoryData) {
    this.store.dispatch(openEditCategoryModal({ category: category }));
  }

  togglePublishCategory(category: CategoryData) {
    this.store.dispatch(
      toggleCategoryPublishedStatus({
        categoryId: category.id,
        published: this.categoryFormGroup.value,
      })
    );
  }

  redirectToCategoryData(categoryId: number) {
    this.router.navigate(['categoryDetails', categoryId]);
  }
}
