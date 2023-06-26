import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  addCategory,
  addCategoryFail,
  addCategorySuccess,
  deleteCategoryFail,
  deleteCategorySuccess,
  getCategoriesFail,
  getCategoriesSucces,
  getCategoryById,
  getCategoryByIdFail,
  getCategoryByIdSuccess,
  toggleCategoryPublishedStatus,
  toggleCategoryPublishedStatusFailed,
  toggleCategoryPublishedStatusSuccess,
} from '../categoryActions/categoryActions';
import { categoryActionTypes } from '../categoryActionTypes/categoryActionTypes';
import { CategoryService } from '../services/category.service';
import { CategoryData } from '../types/CategoryData';

@Injectable()
export class CategoryEffect {
  constructor(
    private actions: Actions,
    private categoriesServise: CategoryService,
    private store: Store<AppState>
  ) {}

  $getCategories = createEffect(() =>
    this.actions.pipe(
      ofType(categoryActionTypes.GET_CATEGORIES),
      switchMap(() => {
        return this.categoriesServise.getCategories();
      }),
      map((data: CategoryData[]) => {
        return getCategoriesSucces({ categories: data });
      }),
      catchError((err) => {
        return of(getCategoriesFail({ errors: err }));
      })
    )
  );

  $deleteCategory = createEffect(() =>
    this.actions.pipe(
      ofType(categoryActionTypes.DELETE_CATEGORY),
      switchMap(({ id }) => {
        return this.categoriesServise.deleteCategoryById(id);
      }),
      map(() => {
        return deleteCategorySuccess();
      }),
      catchError((error) => {
        return of(deleteCategoryFail({ error: error }));
      })
    )
  );

  $toggleCategoryPublish = createEffect(() =>
    this.actions.pipe(
      ofType(toggleCategoryPublishedStatus),
      switchMap(({ categoryId, published }) => {
        return this.categoriesServise.togglePublishCategory(
          categoryId,
          published
        );
      }),
      map(() => {
        return toggleCategoryPublishedStatusSuccess();
      }),
      catchError((error) => {
        return of(toggleCategoryPublishedStatusFailed({ errors: error }));
      })
    )
  );

  $addCategory = createEffect(() =>
    this.actions.pipe(
      ofType(addCategory),
      switchMap(({ category }) => {
        return this.categoriesServise.addCategory(category);
      }),
      map((data) => {
        return addCategorySuccess({ category: data });
      }),
      catchError((error) => {
        return of(addCategoryFail({ error: 'Something went wrong' }));
      })
    )
  );

  $getCategoryById = createEffect(() =>
    this.actions.pipe(
      ofType(getCategoryById),
      switchMap(({ id }) => {
        return this.categoriesServise
          .getCategoryById() // Passing 'id' to the getCategoryById() method
          .pipe(
            map((categories: CategoryData[]) => {
              const category = categories.find((x) => x.id === id);
              if (category) {
                return category;
              } else {
                throw new Error('Category not found');
              }
            }),
            map((category) => {
              return getCategoryByIdSuccess({ category: category });
            }),
            catchError((err) => {
              return of(getCategoryByIdFail({ error: err }));
            })
          );
      })
    )
  );
}
