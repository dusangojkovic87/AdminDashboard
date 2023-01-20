import { createReducer, on } from '@ngrx/store';
import {
  getBestSellingProductStatFail,
  getBestSellingProductStatSuccess,
} from '../overviewActions/saleStatisticsActions';
import { BestSellingStatState } from '../types/BestSellingStatState';

const initialState: BestSellingStatState = {
  bestSellingStat: null,
  errors: null,
};

export const bestSellingStatReducer = createReducer(
  initialState,
  on(
    getBestSellingProductStatSuccess,
    (state: BestSellingStatState, action) => ({
      ...state,
      bestSellingStat: action.topSelling,
      errors: null,
    })
  ),
  on(getBestSellingProductStatFail, (state: BestSellingStatState, action) => ({
    ...state,
    errors: action.errors,
  }))
);
