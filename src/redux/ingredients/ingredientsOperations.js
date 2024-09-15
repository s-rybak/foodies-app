import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";

export const fetchIngredients = createAsyncThunk(
  "getIngredients",
  async ({ limit = 100 } = {}, thunkAPI) => {
    try {
      const res = await api.get(`/api/ingredients?limit=${limit}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
