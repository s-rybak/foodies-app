import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";

export const fetchAreas = createAsyncThunk(
  "getAreas",
  async ({ limit = 100 } = {}, thunkAPI) => {
    try {
      const res = await api.get(`/api/areas?limit=${limit}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
