export enum ordersActionTypes {
  GET_ORDERS = '[Orders] Get Orders',
  GET_ORDERS_SUCCESS = '[Orders] Get Orders success',
  GET_ORDERS_FAIL = '[Orders] Get Orders fail',
  FILTER_ORDERS_BY_PHONE = '[Orders Filter Search] Filter orders by phone',
  FILTER_ORDERS_BY_DATE = '[Orders filter Search] Filter orders by date',
  FILTER_BY_ORDER_STATUS = '[Orders Filter Search] Filter by order status',
  ORDER_STATUS_CHANGED = '[Order Item] Order Status Changed',
  ORDER_STATUS_CHANGE_FAIL = '[Order Item] Order Status Change Fail',
  ORDER_STATUS_CHANGED_SUCCESS = '[Order Item] Order Status Changed Success',
  SET_ORDER_STATUS_TO_DEFAULT = '[Order Item] Set order Status to Default',
}
