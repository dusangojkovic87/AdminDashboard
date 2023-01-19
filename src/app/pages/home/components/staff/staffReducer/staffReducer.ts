import { createReducer, on } from '@ngrx/store';
import { getStaffFail, getStaffSuccess } from '../staffActions/staffActions';
import { StaffState } from '../types/StaffState';

const StaffState: StaffState = {
  staff: null,
  errors: null,
};

export const staffReducer = createReducer(
  StaffState,
  on(getStaffSuccess, (state: StaffState, action) => ({
    ...state,
    staff: action.staff,
  })),
  on(getStaffFail, (state: StaffState, action) => ({
    ...state,
    errors: action.errors,
  }))
);
