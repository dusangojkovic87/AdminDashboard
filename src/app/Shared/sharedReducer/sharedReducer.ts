import { combineReducers } from '@ngrx/store';
import { headerReducer } from './headerReducer';

export const sharedReducers = combineReducers({
  headerReducer: headerReducer,
});
