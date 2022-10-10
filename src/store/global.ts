import { createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
  activeInstance: string;
}

const initialState: GlobalState = {
  activeInstance: "",
};

const globalState = createSlice({
  name: "global",
  initialState,
  reducers: {
    setToInitialState: () => ({ ...initialState }),
  },
});

export const { setToInitialState } = globalState.actions;

export default globalState.reducer;
