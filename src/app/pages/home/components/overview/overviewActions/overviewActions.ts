import { createAction, props } from '@ngrx/store';
import { OverviewActionTypes } from '../overviewActionTypes/overviewActionTypes';
import { AmountCountDetails } from '../types/AmountCountDetails';
import { AmountDetails } from '../types/AmountDetails';
//orders amount overview
export const getAmountDetailsAction = createAction(
  OverviewActionTypes.GET_AMOUNT_DETAILS
);
export const getAmountDetailsActionFail = createAction(
  OverviewActionTypes.GET_AMOUNT_FAIL,
  props<{ error: any }>()
);

export const getAmountDetailsActionSuccess = createAction(
  OverviewActionTypes.GET_AMOUNT_SUCCESS,
  props<{ amountDetails: AmountDetails }>()
);

//orders count info
export const getOrderCountDetails = createAction(
  OverviewActionTypes.GET_AMOUNT_COUNT_DETAILS
);

export const getOrderCountDetailsFail = createAction(
  OverviewActionTypes.GET_AMOUNT_COUNT_FAIL,
  props<{ error: any }>()
);

export const getOrderCountDetailsSuccess = createAction(
  OverviewActionTypes.GET_AMOUNT_COUNT_SUCCESS,
  props<{ data: AmountCountDetails }>()
);
