import { authReducer } from '../pages/auth/authReducer/auth.reducer';
import { AuthStateInterface } from '../pages/auth/types/AuthStateInterface';
import { overviewReducer } from '../pages/home/components/overview/overviewReducer/overviewReducer';
import { AmountDetailsState } from '../pages/home/components/overview/types/AmountDetailsState';
import { headerReducer } from '../Shared/sharedReducer/headerReducer';
import { HeaderInterfaceState } from '../Shared/types/headerInterfaceState';

export interface AppState {
  headerState: HeaderInterfaceState;
  authState: AuthStateInterface;
  amountDetailsState: AmountDetailsState;
}

export const appReducer = {
  headerState: headerReducer,
  authState: authReducer,
  amountDetailsState: overviewReducer,
};
