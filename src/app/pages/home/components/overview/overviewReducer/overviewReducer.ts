import { createReducer, on } from '@ngrx/store';
import {
  getAmountDetailsActionFail,
  getAmountDetailsActionSuccess,
} from '../overviewActions/overviewActions';
import { AmountDetails } from '../types/AmountDetails';
import { AmountDetailsState } from '../types/AmountDetailsState';
const AmountOverviewState: AmountDetailsState = {
  todayOrderAmount: 0,
  monthlyOrderAmount: 0,
  totalOrder: 0,
  errors: '',
};

export const overviewReducer = createReducer(
  AmountOverviewState,
  on(getAmountDetailsActionSuccess, (state: AmountDetailsState, action) => ({
    ...state,
    todayOrderAmount: action.amountDetails.todayOrderAmount,
    monthlyOrderAmount: action.amountDetails.monthlyOrderAmount,
    totalOrder: action.amountDetails.totalOrder,
    errors: '',
  })),
  on(getAmountDetailsActionFail, (state: AmountDetailsState, action) => ({
    ...state,
    todayOrderAmount: 0,
    monthlyOrderAmount: 0,
    totalOrder: 0,
    errors: 'cannot get amount details!',
  }))
);
