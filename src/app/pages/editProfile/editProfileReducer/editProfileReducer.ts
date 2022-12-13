import { createReducer, on } from '@ngrx/store';
import {
  updateUserProfileFail,
  updateUserProfileSuccess,
} from '../editProfileActions/editProfileActions';
import { ProfileState } from '../types/editProfileState';

const profileState: ProfileState = {
  user: undefined,
  errors: null,
};

export const editProfileReducer = createReducer(
  profileState,
  on(updateUserProfileSuccess, (state: ProfileState, action) => ({
    ...state,
    user: action.user,
  })),
  on(updateUserProfileFail, (state: ProfileState, action) => ({
    ...state,
    errors: 'failed to update user!',
  }))
);
