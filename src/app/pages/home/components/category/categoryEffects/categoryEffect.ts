import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getCategories,
  getCategoriesFail,
  getCategoriesSucces,
} from '../categoryActions/categoryActions';
import { categoryActionTypes } from '../categoryActionTypes/categoryActionTypes';
import { CategoryService } from '../services/category.service';
import { CategoryData } from '../types/CategoryData';

@Injectable()
export class CategoryEffect {
  constructor(
    private actions: Actions,
    private categoriesServise: CategoryService
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
}
