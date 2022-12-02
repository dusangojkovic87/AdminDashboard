import { createAction, props } from '@ngrx/store';
import { productActionTypes } from '../productActionTypes/productActionTypes';
import { Product } from '../types/Product';

export const getProducts = createAction(productActionTypes.GET_PRODUCTS);

export const getProductsSuccess = createAction(
  productActionTypes.GET_PRODUCTS_SUCCESS,
  props<{ data: Product[] }>()
);

export const getProductsFail = createAction(
  productActionTypes.GET_PRODUCTS_FAIL,
  props<{ error: any }>()
);

export const openProductsModal = createAction(
  productActionTypes.OPEN_PRODUCT_MODAL
);
export const closeProductsModal = createAction(
  productActionTypes.CLOSE_PRODUCT_MODAL
);
