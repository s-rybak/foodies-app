import { createAsyncThunk } from "@reduxjs/toolkit";

import { getIngredients } from "services/ingredients";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getIngredients();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
