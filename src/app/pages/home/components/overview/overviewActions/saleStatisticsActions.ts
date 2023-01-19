import { createAction, props } from '@ngrx/store';
import { saleStatisticsActionTypes } from '../overviewActionTypes/saleStatisticsActionTypes';
import { SaleOrdersData } from '../types/SaleOrdersData';

export const getSaleStats = createAction(
  saleStatisticsActionTypes.GET_SALE_STATS
);
export const getSaleStatsSucces = createAction(
  saleStatisticsActionTypes.GET_SALE_STATS_SUCCESS,
  props<{ saleOrdersStats: SaleOrdersData }>()
);

export const getSaleStatsFail = createAction(
  saleStatisticsActionTypes.GET_SALE_STATS_FAIL,
  props<{ errors: any }>()
);
