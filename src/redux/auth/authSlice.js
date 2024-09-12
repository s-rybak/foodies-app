import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { signInUser, signUpUser } from "./authOperations";

const initialState = {
  token: null,
  userData: null,
  isSignedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isSignedIn = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addMatcher(isAnyOf(signUpUser.pending, signInUser.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(signUpUser.fulfilled, signInUser.fulfilled),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(signUpUser.rejected, signInUser.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { setError } = authSlice.actions;

export const authReducer = authSlice.reducer;
