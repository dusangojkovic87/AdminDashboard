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

export const getCategoryById = createAction(
  categoryActionTypes.GET_CATEGORY_BY_ID,
  props<{ id: number }>()
);

export const getCategoryByIdSuccess = createAction(
  categoryActionTypes.GET_CATEGORY_BY_ID_SUCCESS,
  props<{ category: CategoryData }>()
);

export const getCategoryByIdFail = createAction(
  categoryActionTypes.GET_CATEGORY_BY_ID_FAIL,
  props<{ error: any }>()
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

export const filterByCategoryInput = createAction(
  categoryActionTypes.FILTER_BY_CATEGORY_FROM_INPUT,
  props<{ productType: string }>()
);
export const filterByCategorySelect = createAction(
  categoryActionTypes.FILTER_BY_CATEGORY_FROM_SELECT,
  props<{ productType: string }>()
);

export const toggleCategoryPublishedStatus = createAction(
  categoryActionTypes.TOGGLE_CATEGORY_PUBLISHED_STATUS,
  props<{ categoryId: number; published: boolean }>()
);

export const toggleCategoryPublishedStatusSuccess = createAction(
  categoryActionTypes.TOGGLE_CATEGORY_PUBLISHED_STATUS_SUCCESS
);

export const toggleCategoryPublishedStatusFailed = createAction(
  categoryActionTypes.TOGGLE_CATEGORY_PUBLISHED_STATUS_FAIL,
  props<{ errors: any }>()
);

export const setPublishedStatusNotificationToDefault = createAction(
  categoryActionTypes.SET_PUBLISHED_NOTIFICATION_TO_DEFAULT
);

export const addCategory = createAction(
  categoryActionTypes.ADD_CATEGORY,
  props<{ category: CategoryData }>()
);

export const addCategorySuccess = createAction(
  categoryActionTypes.ADD_CATEGORY_SUCCESS,
  props<{ category: CategoryData }>()
);

export const addCategoryFail = createAction(
  categoryActionTypes.ADD_CATEGORY_FAIL,
  props<{ error: any }>()
);
