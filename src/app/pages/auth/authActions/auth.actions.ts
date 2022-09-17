import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/User';
import { AuthActionTypes } from '../authActionTypes/auth.types';
import { LoginRequest } from '../types/LoginRequest';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ user: User }>()
);

export const registerSuccess = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{ user: User }>()
);

export const registerFailure = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{ error: any }>()
);

export const loginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{ loginRequest: LoginRequest }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: any }>()
);
