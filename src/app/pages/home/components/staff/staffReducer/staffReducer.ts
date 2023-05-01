import {
  closeEditStaffModal,
  editStaffMemberSuccess,
} from './../staffActions/staffActions';
import { createReducer, on } from '@ngrx/store';
import {
  closeDeleteStaffModal,
  closeStaffModal,
  deleteStaffFail,
  deleteStaffSuccess,
  filterStaffByName,
  filterStaffByRole,
  getStaffFail,
  getStaffSuccess,
  openAddStaffModal,
  openDeleteStaffModal,
  openEditStaffModal,
} from '../staffActions/staffActions';
import { StaffState } from '../types/StaffState';
import { editProductFail } from '../../products/productActions/productActions';

const StaffState: StaffState = {
  staff: [],
  errors: null,
  filteredStaff: [],
  isAddStaffModalOpen: false,
  isDeleteStaffModalOpen: false,
  staffIdToDelete: 0,
  isEditStaffModalOpen: false,
  staffMemberToEdit: null,
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
  })),
  on(openDeleteStaffModal, (state: StaffState, action) => ({
    ...state,
    isDeleteStaffModalOpen: true,
    staffIdToDelete: action.id,
  })),
  on(closeDeleteStaffModal, (state: StaffState, action) => ({
    ...state,
    isDeleteStaffModalOpen: false,
    staffIdToDelete: 0,
  })),
  on(deleteStaffFail, (state: StaffState, action) => ({
    ...state,
    isDeleteStaffModalOpen: false,
    staffIdToDelete: 0,
    errors: [action.error],
  })),
  on(deleteStaffSuccess, (state: StaffState, action) => ({
    ...state,
    isDeleteStaffModalOpen: false,
    staffIdToDelete: 0,
    errors: null,
  })),
  on(openEditStaffModal, (state: StaffState, action) => ({
    ...state,
    isEditStaffModalOpen: true,
    staffMemberToEdit: action.member,
  })),
  on(closeEditStaffModal, (state: StaffState, action) => ({
    ...state,
    isEditStaffModalOpen: false,
    staffMemberToEdit: null,
  })),
  on(editStaffMemberSuccess, (state: StaffState, action) => ({
    ...state,
    isEditStaffModalOpen: false,
    staffMemberToEdit: null,
  })),
  on(editProductFail, (state: StaffState, action) => ({
    ...state,
    isEditStaffModalOpen: false,
    staffMemberToEdit: null,
    errors: ['Edit memeber failed'],
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
