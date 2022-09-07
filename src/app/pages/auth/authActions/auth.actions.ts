import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/User';
import { AuthActionTypes } from '../authActionTypes/auth.types';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ user: User }>()
);
