import { createReducer, on } from '@ngrx/store';
import {
  closeAddCategoryModal,
  getCategoriesFail,
  getCategoriesSucces,
  openAddCategoryModal,
} from '../categoryActions/categoryActions';
import { categoryActionTypes } from '../categoryActionTypes/categoryActionTypes';
import { CategoryState } from '../types/CategoryState';

const CategoryState: CategoryState = {
  categories: null,
  isModalOpen: false,
  errors: null,
};

export const categoryReducer = createReducer(
  CategoryState,
  on(openAddCategoryModal, (state: CategoryState, action) => ({
    ...state,
    isModalOpen: true,
  })),
  on(closeAddCategoryModal, (state: CategoryState, action) => ({
    ...state,
    isModalOpen: false,
  })),
  on(getCategoriesSucces, (state: CategoryState, action) => ({
    ...state,
    categories: action.categories,
  })),
  on(getCategoriesFail, (state: CategoryState, action) => ({
    ...state,
    errors: 'Could not get categories!',
  }))
);
