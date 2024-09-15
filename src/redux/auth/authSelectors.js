import { createSelector } from "@reduxjs/toolkit";

export const selectAuthToken = state => state.auth.token;

export const selectAuthUserData = state => state.auth.userData;

export const selectAuthUserId = createSelector(
  [selectAuthUserData],
  userData => userData?.id
);

export const selectAuthIsSignedIn = state => state.auth.isSignedIn;

export const selectAuthIsVerified = state => !!state.auth?.userData?.verify;

export const selectAuthIsLoading = state => state.auth.isLoading;

export const selectAuthError = state => state.auth.error;
