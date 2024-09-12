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
        return thunkApi.rejectWithValue(
          "There is something wrong with the provided data: " +
            (error.response.data.message || "Invalid input.")
        );
      }
      if (error.status === 409) {
        return thunkApi.rejectWithValue(
          "It seems that this email is already in use. Please log in or use another email."
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
      thunkApi.rejectWithValue(error.message);
    }
  }
);
