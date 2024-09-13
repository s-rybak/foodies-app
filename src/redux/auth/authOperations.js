import { createAsyncThunk } from "@reduxjs/toolkit";

import api, { setToken } from "services/api";

const defaultErrorMessage =
  "An unexpected error occurred. Please try again later.";

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (formData, thunkApi) => {
    try {
      const { data } = await api.post("/api/auth/register", formData);
      return data;
    } catch (error) {
      if (error.status === 400) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
      if (error.status === 409) {
        return thunkApi.rejectWithValue(
          "It seems that this email is already in use. Please sign in to your account or use another email."
        );
      }
      return thunkApi.rejectWithValue(error.message || defaultErrorMessage);
    }
  }
);

export const resendVerificationEmail = createAsyncThunk(
  "auth/resendVerification",
  async (email, thunkApi) => {
    try {
      await api.post("/api/auth/verify", { email });
    } catch (error) {
      if (error.status === 400 || error.status === 404) {
        return thunkApi.rejectWithValue(
          "An error occurred: " + error.response.data.message
        );
      }
      return thunkApi.rejectWithValue(error.message || defaultErrorMessage);
    }
  }
);

export const verifyUserEmail = createAsyncThunk(
  "auth/verifyUserEmail",
  async (verificationToken, thunkApi) => {
    try {
      await api.get(`/api/auth/verify/${verificationToken}`);
    } catch (error) {
      if (error.status === 404) {
        return thunkApi.rejectWithValue(
          "An error occurred: " + error.response.data.message
        );
      }
      return thunkApi.rejectWithValue(error.message || defaultErrorMessage);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (formData, thunkApi) => {
    try {
      const { data } = await api.post("/api/auth/login", formData);
      setToken(data.token);
      return data;
    } catch (error) {
      if (
        error.status === 401 &&
        error.response.data.message === "Email is not verified"
      ) {
        thunkApi.dispatch(resendVerificationEmail(formData.email));
        return thunkApi.rejectWithValue(
          "Email is not verified. A verification email has been resent to your email address. Please check your inbox and follow the instructions to confirm your email."
        );
      } else if (
        error.status === 400 ||
        error.status === 401 ||
        error.status === 404
      ) {
        return thunkApi.rejectWithValue(
          "An error occurred: " + error.response.data.message
        );
      }
      return thunkApi.rejectWithValue(error.message || defaultErrorMessage);
    }
  }
);
