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

export const openDeleteCategoryModal = createAction(
  categoryActionTypes.OPEN_DELETE_CATEGORY_MODAL,
  props<{ id: number }>()
);

export const closeDeleteCategoryModal = createAction(
  categoryActionTypes.CLOSE_DELETE_CATEGORY_MODAL
);

export const deleteCategory = createAction(
  categoryActionTypes.DELETE_CATEGORY,
  props<{ id: number }>()
);

export const deleteCategorySuccess = createAction(
  categoryActionTypes.DELETE_CATEGORY_SUCCESS
);

export const deleteCategoryFail = createAction(
  categoryActionTypes.DELETE_CATEGORY_FAIL,
  props<{ error: any }>()
);

export const openEditCategoryModal = createAction(
  categoryActionTypes.OPEN_EDIT_CATEGORY_MODAL,
  props<{ category: CategoryData }>()
);

export const closeEditCategoryModal = createAction(
  categoryActionTypes.CLOSE_EDIT_CATEGORY_MODAL
);
