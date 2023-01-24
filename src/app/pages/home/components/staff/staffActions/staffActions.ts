import { createAction, props } from '@ngrx/store';
import { staffActionTypes } from '../staffActionTypes/staffActionTypes';
import { StaffMember } from '../types/StaffMember';

export const getStaff = createAction(staffActionTypes.GET_STAFF);

export const getStaffSuccess = createAction(
  staffActionTypes.GET_STAFF_SUCCESS,
  props<{ staff: StaffMember[] }>()
);

export const getStaffFail = createAction(
  staffActionTypes.GET_STAFF_FAIL,
  props<{ errors: any }>()
);

export const filterStaffByName = createAction(
  staffActionTypes.FILTER_STAFF_BY_NAME,
  props<{ name: string }>()
);
