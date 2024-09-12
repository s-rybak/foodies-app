import { createAsyncThunk } from "@reduxjs/toolkit";

import { ingredientsApi } from "../../services/Api.js";

export const fetchIngredients = createAsyncThunk(
  "getIngredients",
  async (_, thunkAPI) => {
    try {
      const res = await ingredientsApi.getIngredients();
      return res.data;
    } catch (error) {
      console.log("error", error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
