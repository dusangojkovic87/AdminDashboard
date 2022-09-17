import { authReducer } from '../pages/auth/authReducer/auth.reducer';
import { headerReducer } from '../Shared/sharedReducer/headerReducer';
import { HeaderInterfaceState } from '../Shared/types/headerInterfaceState';

export interface AppState {
  headerState: HeaderInterfaceState;
}

export const appReducer = {
  headerState: headerReducer,
  authState: authReducer,
};
