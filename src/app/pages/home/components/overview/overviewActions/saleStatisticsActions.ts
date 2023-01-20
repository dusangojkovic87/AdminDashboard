import { createAction, props } from '@ngrx/store';
import { saleStatisticsActionTypes } from '../overviewActionTypes/saleStatisticsActionTypes';
import { BestSellingData } from '../types/BestSellingData';
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

export const getBestSellingProductStat = createAction(
  saleStatisticsActionTypes.GET_BEST_SELLING_PRODUCTS
);

export const getBestSellingProductStatSuccess = createAction(
  saleStatisticsActionTypes.GET_BEST_SELLING_PRODUCTS_SUCCESS,
  props<{ topSelling: BestSellingData }>()
);

export const getBestSellingProductStatFail = createAction(
  saleStatisticsActionTypes.GET_SALE_STATS_FAIL,
  props<{ errors: any }>()
);
