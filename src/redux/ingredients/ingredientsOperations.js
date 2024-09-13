import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";

export const fetchIngredients = createAsyncThunk(
  "getIngredients",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/api/ingredients");
      return res.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
