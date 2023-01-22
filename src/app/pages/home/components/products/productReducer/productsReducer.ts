import { createReducer, on } from '@ngrx/store';
import {
  closeEditProductModal,
  closeProductsModal,
  getProductsSuccess,
  openEditProductModal,
  openProductsModal,
} from '../productActions/productActions';
import { ProductListState } from '../types/ProductsListState';

const ProductState: ProductListState = {
  products: [],
  isAddProductModalOpen: false,
  isEditProductModalOpen: false,
  productToEdit: null,
};

export const productsReducer = createReducer(
  ProductState,
  on(getProductsSuccess, (state: ProductListState, action) => ({
    ...state,
    products: action.data,
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
  }))
);
