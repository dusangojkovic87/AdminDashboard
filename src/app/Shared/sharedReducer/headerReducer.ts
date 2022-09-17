import { createReducer, on } from '@ngrx/store';
import { toggleProfileModalAction } from '../sharedActions/header.actions';
import { HeaderInterfaceState } from '../types/headerInterfaceState';
const initialState: HeaderInterfaceState = {
  modalIsOpen: false,
};

export const headerReducer = createReducer(
  initialState,
  on(toggleProfileModalAction, (state: HeaderInterfaceState) => ({
    ...state,
    modalIsOpen: !state.modalIsOpen,
  }))
);
