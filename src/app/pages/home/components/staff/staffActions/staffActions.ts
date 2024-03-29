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

export const filterStaffByRole = createAction(
  staffActionTypes.FILTER_STAFF_BY_ROLE,
  props<{ role: string }>()
);

export const openAddStaffModal = createAction(
  staffActionTypes.OPEN_ADD_STAFF_MODAL
);

export const closeStaffModal = createAction(staffActionTypes.CLOSE_STAFF_MODAL);

export const openDeleteStaffModal = createAction(
  staffActionTypes.OPEN_DELETE_STAFF_MODAL,
  props<{ id: number }>()
);

export const closeDeleteStaffModal = createAction(
  staffActionTypes.CLOSE_DELETE_STAFF_MODAL
);

export const deleteStaff = createAction(
  staffActionTypes.DELETE_STAFF_RECORD,
  props<{ id: number }>()
);

export const deleteStaffSuccess = createAction(
  staffActionTypes.DELETE_STAFF_SUCCESS
);

export const deleteStaffFail = createAction(
  staffActionTypes.DELETE_STAFF_FAIL,
  props<{ error: any }>()
);

export const openEditStaffModal = createAction(
  staffActionTypes.OPEN_EDIT_STAFF_MODAL,
  props<{ member: StaffMember }>()
);

export const closeEditStaffModal = createAction(
  staffActionTypes.CLOSE_EDIT_STAFF_MODAL
);

export const editStaffMember = createAction(
  staffActionTypes.EDIT_STAFF_MEMBER,
  props<{ member: StaffMember }>()
);

export const editStaffMemberSuccess = createAction(
  staffActionTypes.EDIT_STAFF_MEMBER_SUCCESS
);

export const editStaffMemberFail = createAction(
  staffActionTypes.EDIT_STAFF_MEMBER_FAIL,
  props<{ error: any }>()
);

export const addStaffMember = createAction(
  staffActionTypes.ADD_STAFF_MEMBER,
  props<{ member: StaffMember }>()
);

export const addStaffMemberSuccess = createAction(
  staffActionTypes.ADD_STAFF_MEMBER_SUCCESS
);

export const addStaffMemberFail = createAction(
  staffActionTypes.DELETE_STAFF_FAIL,
  props<{ error: any }>()
);
