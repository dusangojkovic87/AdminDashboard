export enum customerOrderActionTypes {
  GET_CUSTOMER_ORDERS = '[Customer Order List] Get customer order',
  GET_CUSTOMER_ORDERS_SUCCESS = '[Customer Order List] Get customer orders success',
  GET_CUSTOMER_ORDERS_FAIL = '[Customer Order List] Get customer orders fail',
  CLEAR_CUSTOMER_ORDERS_FROM_STORE = '[Customer Order List] Clear customer orders from store',
  ORDER_STATUS_CHANGED = '[Customer Order Item] Order status changed',
  ORDER_STATUS_CHANGED_SUCCESS = '[Customer Order Item] Order status changed success',
  ORDER_STATUS_CHANGED_FAIL = '[Customer Order Item] Order status changed fail',
  SET_ORDER_STATUS_MESSAGE_TO_DEFAULT = '[Customer Order Item] Set order status message to default',
}
