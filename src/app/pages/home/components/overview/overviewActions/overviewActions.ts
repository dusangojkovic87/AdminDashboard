import { createAction, props } from '@ngrx/store';
import { OverviewActionTypes } from '../overviewActionTypes/overviewActionTypes';
import { AmountDetails } from '../types/AmountDetails';

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
