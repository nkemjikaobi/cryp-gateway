import { AnyAction, CombinedState, combineReducers, Reducer } from "@reduxjs/toolkit";

import auth, { AuthState } from "./auth";
import global, { GlobalState } from "./global";

export interface AppState {
  global: GlobalState;
  auth: AuthState;
}

const rootReducer: Reducer<CombinedState<AppState>, AnyAction> = combineReducers({
  global,
  auth,
});

export default rootReducer;
