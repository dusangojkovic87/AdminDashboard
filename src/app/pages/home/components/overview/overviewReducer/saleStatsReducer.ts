import { createReducer, on } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import {
  getSaleStats,
  getSaleStatsFail,
  getSaleStatsSucces,
} from '../overviewActions/saleStatisticsActions';
import { SaleOrdersState } from '../types/SaleOrdersState';

const initState: SaleOrdersState = {
  salesStatistics: null,
  errors: null,
};

export const saleOrdersReducer = createReducer(
  initState,
  on(getSaleStatsSucces, (state: SaleOrdersState, action) => ({
    ...state,
    salesStatistics: action.saleOrdersStats,
  })),
  on(getSaleStatsFail, (state: SaleOrdersState, action) => ({
    ...state,
    errors: action.errors,
  }))
);
