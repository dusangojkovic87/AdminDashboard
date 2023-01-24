import { createReducer, on } from '@ngrx/store';
import {
  filterStaffByName,
  filterStaffByRole,
  getStaffFail,
  getStaffSuccess,
} from '../staffActions/staffActions';
import { StaffState } from '../types/StaffState';

const StaffState: StaffState = {
  staff: [],
  errors: null,
  filteredStaff: [],
};

export const staffReducer = createReducer(
  StaffState,
  on(getStaffSuccess, (state: StaffState, action) => ({
    ...state,
    staff: action.staff,
    filteredStaff: action.staff,
  })),
  on(getStaffFail, (state: StaffState, action) => ({
    ...state,
    errors: action.errors,
  })),
  on(filterStaffByName, (state: StaffState, action) => ({
    ...state,
    filteredStaff: FilterStaffByName(state, action.name),
  })),
  on(filterStaffByRole, (state: StaffState, action) => ({
    ...state,
    filteredStaff: FilterStaffByRole(state, action.role),
  }))
);

function FilterStaffByName(state: StaffState, action: string) {
  if (action.toLowerCase() === '') {
    return state.staff;
  }

  return state.staff.filter((x) =>
    x.name.toLowerCase().includes(action.toLowerCase())
  );
}

function FilterStaffByRole(state: StaffState, action: string) {
  if (action.toLowerCase() === '') {
    return state.staff;
  }

  return state.staff.filter(
    (x) => x.role.toLowerCase() === action.toLowerCase()
  );
}
