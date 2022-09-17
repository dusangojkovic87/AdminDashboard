import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import {
  loginSuccess,
  registerAction,
  registerSuccess,
} from '../authActions/auth.actions';
import { AuthStateInterface } from '../types/AuthStateInterface';

//init state
const initialState: AuthStateInterface = {
  isAuthenticated: false,
  currentUser: null,
};

//reducer
export const authReducer = createReducer(
  initialState,
  on(registerSuccess, (state: AuthStateInterface, action) => ({
    ...state,
    isAuthenticated: true,
    currentUser: action.user,
  })),
  on(loginSuccess, (state: AuthStateInterface, action) => ({
    ...state,
    isAuthenticated: true,
    currentUser: action.user,
  }))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
