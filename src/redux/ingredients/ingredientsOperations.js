import { createAsyncThunk } from "@reduxjs/toolkit";

import { ingredientsApi } from "../../services/Api.js";

export const fetchIngredients = createAsyncThunk(
  "getIngredients",
  async (_, thunkAPI) => {
    try {
      const res = await ingredientsApi.getIngredients();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreIngredients = createAsyncThunk(
  "getMoreIngredients",
  async (value, thunkAPI) => {
    try {
      const res = await ingredientsApi.getMoreIngredients(value);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
