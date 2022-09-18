import { createAction } from '@ngrx/store';
import { HeaderActionTypes } from '../sharedActionTypes/header.action.types';

export const toggleProfileModalAction = createAction(
  HeaderActionTypes.TOGGLE_PROFILE_MODAL
);

export const closeProfileModalAction = createAction(
  HeaderActionTypes.CLOSE_PROFILE_MODAL
);
