import { createAction, props } from '@ngrx/store';
import { categoryActionTypes } from '../categoryActionTypes/categoryActionTypes';
import { CategoryData } from '../types/CategoryData';

export const openAddCategoryModal = createAction(
  categoryActionTypes.OPEN_ADD_CATEGORY_MODAL
);

export const closeAddCategoryModal = createAction(
  categoryActionTypes.CLOSE_ADD_CATEGORY_MODAL
);

export const getCategories = createAction(categoryActionTypes.GET_CATEGORIES);
export const getCategoriesSucces = createAction(
  categoryActionTypes.GET_CATEGORIES_SUCCESS,
  props<{ categories: CategoryData[] }>()
);

export const getCategoriesFail = createAction(
  categoryActionTypes.GET_CATEGORIES_FAIL,
  props<{ errors: any }>()
);
