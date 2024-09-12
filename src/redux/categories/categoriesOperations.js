import { createAsyncThunk } from "@reduxjs/toolkit";

import { categoriesApi } from "services/Api";

export const fetchCategories = createAsyncThunk(
  "getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await categoriesApi.getCategories();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreCategories = createAsyncThunk(
  "getMoreCategories",
  async (value, thunkAPI) => {
    try {
      const res = await categoriesApi.getMoreCategories(value);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
