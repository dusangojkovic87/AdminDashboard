import { createReducer, on } from '@ngrx/store';
import {
  closeStaffModal,
  filterStaffByName,
  filterStaffByRole,
  getStaffFail,
  getStaffSuccess,
  openAddStaffModal,
} from '../staffActions/staffActions';
import { StaffState } from '../types/StaffState';

const StaffState: StaffState = {
  staff: [],
  errors: null,
  filteredStaff: [],
  isAddStaffModalOpen: false,
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
  })),
  on(openAddStaffModal, (state: StaffState, action) => ({
    ...state,
    isAddStaffModalOpen: true,
  })),
  on(closeStaffModal, (state: StaffState, action) => ({
    ...state,
    isAddStaffModalOpen: false,
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
