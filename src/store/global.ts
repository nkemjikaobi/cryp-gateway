import { createSlice } from "@reduxjs/toolkit";

import { WALLET_INSTANCE } from "@shared/libs/helpers";

export interface GlobalState {
  walletInstance: string;
  destination: string;
  showSecurityQuestion: boolean;
}

const initialState: GlobalState = {
  walletInstance: WALLET_INSTANCE.CRYP_TOKENS,
  destination: "",
  showSecurityQuestion: false,
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

    /**
     * Function to set the redirect destination
     * @param {GlobalState} state
     * @param {any} action
     */
    setRedirectDestination: (state: GlobalState, action: any) => {
      state.destination = action.payload;
    },

    /**
     * Function to toggle visibility of the security question
     * @param {GlobalState} state
     * @param {any} action
     */
    setShowSecurityQuestion: (state: GlobalState, action: any) => {
      state.showSecurityQuestion = action.payload;
    },
  },
});

export const { setToInitialState, modifyWalletInstance, setRedirectDestination, setShowSecurityQuestion } = globalState.actions;

export default globalState.reducer;
