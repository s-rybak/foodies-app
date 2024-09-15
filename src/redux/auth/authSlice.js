import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  signUpUser,
  resendVerificationEmail,
  verifyUserEmail,
  signInUser,
  refreshUser,
  logoutUser,
} from "./authOperations";

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
    resetAuthError(state) {
      state.error = initialState.error;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isSignedIn = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isSignedIn = true;
        state.userData = action.payload;
      })
      .addCase(refreshUser.rejected, state => {
        state.token = initialState.token;
        state.userData = initialState.userData;
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          signUpUser.pending,
          resendVerificationEmail.pending,
          verifyUserEmail.pending,
          signInUser.pending,
          refreshUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpUser.fulfilled,
          resendVerificationEmail.fulfilled,
          verifyUserEmail.fulfilled,
          signInUser.fulfilled,
          refreshUser.fulfilled,
          logoutUser.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpUser.rejected,
          resendVerificationEmail.rejected,
          verifyUserEmail.rejected,
          signInUser.rejected,
          // refreshUser.rejected should not set error
          logoutUser.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { resetAuthError } = authSlice.actions;

export const authReducer = authSlice.reducer;
