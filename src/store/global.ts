import { createSlice } from "@reduxjs/toolkit";

import { WALLET_INSTANCE } from "@shared/libs/helpers";

export interface GlobalState {
  walletInstance: string;
}

const initialState: GlobalState = {
  walletInstance: WALLET_INSTANCE.CRYP_TOKENS,
};

const globalState = createSlice({
  name: "global",
  initialState,
  reducers: {
    setToInitialState: () => ({ ...initialState }),

    /**
     * Function to set the wallet instance
     * @param {GlobalState} state
     * @param {any} action
     */
    modifyWalletInstance: (state: GlobalState, action: any) => {
      state.walletInstance = action.payload;
    },
  },
});

export const { setToInitialState, modifyWalletInstance } = globalState.actions;

export default globalState.reducer;
