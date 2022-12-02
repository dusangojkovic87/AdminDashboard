import { createReducer, on } from '@ngrx/store';
import {
  closeProductsModal,
  getProductsSuccess,
  openProductsModal,
} from '../productActions/productActions';
import { ProductListState } from '../types/ProductsListState';

const ProductState: ProductListState = {
  products: [],
  isAddProductModalOpen: false,
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
  }))
);
