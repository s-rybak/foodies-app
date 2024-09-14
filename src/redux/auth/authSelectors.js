export const selectAuthToken = state => state.auth.token;

export const selectAuthUserData = state => state.auth.userData;

export const selectUserId = state => state.auth.userData?.id;

export const selectAuthIsSignedIn = state => state.auth.isSignedIn;

export const selectAuthIsLoading = state => state.auth.isLoading;

export const selectAuthError = state => state.auth.error;
