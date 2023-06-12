import { createAction, props } from '@ngrx/store';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';
import { ordersActionTypes } from '../ordersActionTypes/ordersActionsTypes';

export const getOrders = createAction(ordersActionTypes.GET_ORDERS);

export const getOrdersSuccess = createAction(
  ordersActionTypes.GET_ORDERS_SUCCESS,
  props<{ orders: CustomerOrder[] }>()
);

export const getOrdersFail = createAction(
  ordersActionTypes.GET_ORDERS_FAIL,
  props<{ errors: any }>()
);

export const filterOrdersByPhone = createAction(
  ordersActionTypes.FILTER_ORDERS_BY_PHONE,
  props<{ phone: string }>()
);

export const filterOrdersByDate = createAction(
  ordersActionTypes.FILTER_ORDERS_BY_DATE,
  props<{ time: string }>()
);

export const filterByOrderStatus = createAction(
  ordersActionTypes.FILTER_BY_ORDER_STATUS,
  props<{ status: string }>()
);

export const customerOrderStatusChanged = createAction(
  ordersActionTypes.ORDER_STATUS_CHANGED,
  props<{ order: CustomerOrder; newStatus: string }>()
);

export const customerOrderStatusChangedSuccess = createAction(
  ordersActionTypes.ORDER_STATUS_CHANGED_SUCCESS,
  props<{ isStatusChanged: boolean }>()
);

export const customerOrderStatusChangedFail = createAction(
  ordersActionTypes.ORDER_STATUS_CHANGE_FAIL,
  props<{ error: any }>()
);

export const setOrderStatusToDefault = createAction(
  ordersActionTypes.SET_ORDER_STATUS_TO_DEFAULT
);

export const downloadPdf = createAction(ordersActionTypes.DOWNLOAD_PDF);

export const setDownloadPdfToFalse = createAction(
  ordersActionTypes.SET_DOWNLOAD_PDF_TO_DEFAULT
);

export const printInvoices = createAction(ordersActionTypes.PRINT_INVOICES);

export const setPrintToDefault = createAction(
  ordersActionTypes.SET_PRINT_TO_DEFAULT
);
