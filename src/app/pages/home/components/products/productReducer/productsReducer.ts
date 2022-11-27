import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { getProductsSuccess } from '../productActions/productActions';
import { ProductListState } from '../types/ProductsListState';

const ProductState: ProductListState = {
  products: [],
};

export const productsReducer = createReducer(
  ProductState,
  on(getProductsSuccess, (state: ProductListState, action) => ({
    ...state,
    products: action.data,
  }))
);
