import { AnyAction, CombinedState, combineReducers, Reducer } from "@reduxjs/toolkit";

import global, { GlobalState } from "./global";

export interface AppState {
  global: GlobalState;
}

const rootReducer: Reducer<CombinedState<AppState>, AnyAction> = combineReducers({
  global,
});

export default rootReducer;
