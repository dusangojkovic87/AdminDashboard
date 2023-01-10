import { act } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import {
  closeAddCategoryModal,
  closeDeleteCategoryModal,
  deleteCategorySuccess,
  getCategoriesFail,
  getCategoriesSucces,
  openAddCategoryModal,
  openDeleteCategoryModal,
} from '../categoryActions/categoryActions';
import { CategoryState } from '../types/CategoryState';

const CategoryState: CategoryState = {
  categories: null,
  isModalOpen: false,
  isDeleteModalOpen: false,
  categoryToDelete: null,
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
  })),
  on(openDeleteCategoryModal, (state: CategoryState, action) => ({
    ...state,
    isDeleteModalOpen: true,
    categoryToDelete: action.id,
  })),
  on(closeDeleteCategoryModal, (state: CategoryState, action) => ({
    ...state,
    isDeleteModalOpen: false,
    categoryToDelete: null,
  })),
  on(deleteCategorySuccess, (state: CategoryState, action) => ({
    ...state,
    isDeleteModalOpen: false,
    categoryToDelete: null,
  }))
);
