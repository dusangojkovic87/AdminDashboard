import { state } from '@angular/animations';
import { act } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import {
  closeEditProductModal,
  closeProductsModal,
  filterProductsByCategory,
  filterProductsByName,
  getProductsSuccess,
  openEditProductModal,
  openProductsModal,
} from '../productActions/productActions';
import { FilterProductTerms } from '../types/FilterProductTerms';
import { Product } from '../types/Product';
import { ProductListState } from '../types/ProductsListState';

const ProductState: ProductListState = {
  products: [],
  isAddProductModalOpen: false,
  isEditProductModalOpen: false,
  productToEdit: null,
  filteredProducts: [],
};

export const productsReducer = createReducer(
  ProductState,
  on(getProductsSuccess, (state: ProductListState, action) => ({
    ...state,
    products: action.data,
    filteredProducts: action.data,
  })),
  on(openProductsModal, (state: ProductListState, action) => ({
    ...state,
    isAddProductModalOpen: true,
  })),
  on(closeProductsModal, (state: ProductListState, action) => ({
    ...state,
    isAddProductModalOpen: false,
  })),
  on(openEditProductModal, (state: ProductListState, action) => ({
    ...state,
    isEditProductModalOpen: true,
    productToEdit: action.product,
  })),
  on(closeEditProductModal, (state: ProductListState, action) => ({
    ...state,
    isEditProductModalOpen: false,
    productToEdit: null,
  })),
  on(filterProductsByName, (state: ProductListState, action) => ({
    ...state,
    filteredProducts: SortProductsByProductName(state, action.productName),
  })),
  on(filterProductsByCategory, (state: ProductListState, action) => ({
    ...state,
    filteredProducts: SortByCategory(state, action.category),
  }))
);

function SortProductsByProductName(state: ProductListState, action: string) {
  if (action === '') {
    return state.products;
  } else {
    return state.products.filter((product) =>
      product.productName
        .toLocaleLowerCase()
        .includes(action.toLocaleLowerCase())
    );
  }
}

function SortByCategory(state: ProductListState, action: string) {
  if (action === 'all') {
    return state.products;
  } else {
    return state.products.filter((p) => p.category === action);
  }
}
