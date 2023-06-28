import { createReducer, on } from '@ngrx/store';
import {
  addCategoryFail,
  addCategorySuccess,
  closeAddCategoryModal,
  closeDeleteCategoryModal,
  closeDeleteProductModal,
  closeEditCategoryModal,
  deleteCategorySuccess,
  filterByCategoryInput,
  filterByCategorySelect,
  filterCategoryProductsByName,
  filterCategoryProductsByPrice,
  getCategoriesFail,
  getCategoriesSucces,
  getCategoryByIdFail,
  getCategoryByIdSuccess,
  openAddCategoryModal,
  openDeleteCategoryModal,
  openDeleteProductModal,
  openEditCategoryModal,
  setPublishedStatusNotificationToDefault,
  toggleCategoryPublishedStatusSuccess,
} from '../categoryActions/categoryActions';
import { CategoryState } from '../types/CategoryState';

const CategoryState: CategoryState = {
  categories: [],
  isModalOpen: false,
  isEditCategoryModalOpen: false,
  isDeleteModalOpen: false,
  categoryToDelete: null,
  categoryToEdit: null,
  errors: null,
  filteredCategories: [],
  isCategoryPublishedStatusChanged: false,
  productsByCategoryId: [],
  isDeleteProductModalOpen: false,
  productToDeleteId: 0,
  filteredProductsByCategoryId: [],
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
    filteredCategories: action.categories,
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
  })),
  on(openEditCategoryModal, (state: CategoryState, action) => ({
    ...state,
    isEditCategoryModalOpen: true,
    categoryToEdit: action.category,
  })),
  on(closeEditCategoryModal, (state: CategoryState, action) => ({
    ...state,
    isEditCategoryModalOpen: false,
    categoryToEdit: null,
  })),
  on(filterByCategorySelect, (state: CategoryState, action) => ({
    ...state,
    filteredCategories: CategorySelectOrder(state, action.productType),
  })),
  on(filterByCategoryInput, (state: CategoryState, action) => ({
    ...state,
    filteredCategories: CategoryInputOrder(state, action.productType),
  })),
  on(toggleCategoryPublishedStatusSuccess, (state: CategoryState, action) => ({
    ...state,
    isCategoryPublishedStatusChanged: true,
  })),
  on(
    setPublishedStatusNotificationToDefault,
    (state: CategoryState, action) => ({
      ...state,
      isCategoryPublishedStatusChanged: false,
    })
  ),
  on(addCategoryFail, (state: CategoryState, action) => ({
    ...state,
    errors: action.error,
  })),
  on(getCategoryByIdSuccess, (state: CategoryState, action) => ({
    ...state,
    productsByCategoryId: action.category.products,
    filteredProductsByCategoryId: action.category.products,
  })),
  on(getCategoryByIdFail, (state: CategoryState, action) => ({
    ...state,
    errors: action.error,
  })),
  on(openDeleteProductModal, (state: CategoryState, action) => ({
    ...state,
    productToDeleteId: action.id,
    isDeleteProductModalOpen: true,
  })),
  on(closeDeleteProductModal, (state: CategoryState, action) => ({
    ...state,
    productToDeleteId: 0,
    isDeleteProductModalOpen: false,
  })),
  on(filterCategoryProductsByName, (state: CategoryState, action) => ({
    ...state,
    filteredProductsByCategoryId: FilterCategoryProductsByName(
      state,
      action.name
    ),
  })),
  on(filterCategoryProductsByPrice, (state: CategoryState, action) => ({
    ...state,
    filteredProductsByCategoryId: FilterCategoryProductsByPrice(
      state,
      action.price
    ),
  }))
);

function CategorySelectOrder(state: CategoryState, action: string) {
  return state.categories.filter(
    (x) => x.name.toLowerCase() === action.toLowerCase()
  );
}

function CategoryInputOrder(state: CategoryState, action: string) {
  if (action.toLowerCase() === '') {
    return state.categories;
  }

  return state.categories.filter((x) =>
    x.name.toLowerCase().includes(action.toLowerCase())
  );
}

function FilterCategoryProductsByName(state: CategoryState, action: string) {
  if (action === '') {
    return state.productsByCategoryId;
  }
  return state.filteredProductsByCategoryId.filter((product) =>
    product.productName.toLowerCase().includes(action.toLowerCase())
  );
}

function FilterCategoryProductsByPrice(state: CategoryState, action: string) {
  const sortedProducts = [...state.filteredProductsByCategoryId];
  if (action.toLowerCase() === 'asc') {
    return sortedProducts.sort((a, b) => a.price - b.price);
  } else {
    return sortedProducts.sort((a, b) => b.price - a.price);
  }
}
