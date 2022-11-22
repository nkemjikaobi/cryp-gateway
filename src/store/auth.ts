import { createSlice } from "@reduxjs/toolkit";

export interface UserProps {
  id?: string;
  email?: string;
  phoneCode?: string;
  phoneNumber?: string;
  lastName?: string;
  isPinSet?: boolean;
  firstName?: string;
  customerId?: string;
  questions?: Array<QuestionProps>;
  createdAt?: string;
  updatedAt?: string;
  activeBusiness?: any;
  activeBusinessId?: string;
  businesses?: any;
  activeRole?: any;
}

export interface QuestionProps {
  question: string;
  answer: string;
}

export interface AuthState {
  user: UserProps;
}

const initialState: AuthState = {
  user: {},
};

const authState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToInitialState: () => ({ ...initialState }),

    /**
     * Function to set the logged in user
     * Feell free to change the type of action to a suitable Type
     * @param {AuthState} state
     * @param {any} action
     */
    setCurrentUser: (state: AuthState, action: any) => {
      state.user = action.payload;
    },
  },
});

export const { setToInitialState, setCurrentUser } = authState.actions;

export default authState.reducer;
