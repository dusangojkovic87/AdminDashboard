import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/User';
import { editProfileActionTypes } from '../editProfileActionTypes/editProfileActionTypes';

export const updateUserProfile = createAction(
  editProfileActionTypes.UPDATE_USER_PROFILE,
  props<{ user: User }>()
);

export const updateUserProfileSuccess = createAction(
  editProfileActionTypes.UPDATE_USER_PROFILE_SUCCESS,
  props<{ user: User }>()
);

export const updateUserProfileFail = createAction(
  editProfileActionTypes.UPDATE_USER_PROFILE_FAIL,
  props<{ error: any }>()
);
