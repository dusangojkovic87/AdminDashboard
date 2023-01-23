import { createAction, props } from '@ngrx/store';
import { productActionTypes } from '../productActionTypes/productActionTypes';
import { addProduct } from '../types/addProduct';
import { FilterProductTerms } from '../types/FilterProductTerms';
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

export const addProductModal = createAction(
  productActionTypes.ADD_PRODUCT,
  props<{ product: addProduct }>()
);
export const addProductSuccess = createAction(
  productActionTypes.ADD_PRODUCT_SUCCESS,
  props<{ product: addProduct }>()
);

export const addProductFail = createAction(
  productActionTypes.ADD_PRODUC_FAIL,
  props<{ error: any }>()
);

export const openEditProductModal = createAction(
  productActionTypes.OPEN_EDIT_PRODUCT_MODAL,
  props<{ product: Product }>()
);

export const closeEditProductModal = createAction(
  productActionTypes.CLOSE_EDIT_PRODUCT_MODAL
);

export const editProduct = createAction(productActionTypes.EDIT_PRODUCT);

export const editProductSuccess = createAction(
  productActionTypes.EDIT_PRODUCT_SUCCESS,
  props<{ product: addProduct }>()
);

export const editProductFail = createAction(
  productActionTypes.EDIT_PRODUCT_FAIL,
  props<{ error: any }>()
);

export const filterProductsByName = createAction(
  productActionTypes.FILTER_PRODUCTS_BY_NAME,
  props<{ productName: string }>()
);

export const filterProductsByCategory = createAction(
  productActionTypes.FILTER_PRODUCTS_BY_CATEGORY,
  props<{ category: string }>()
);
