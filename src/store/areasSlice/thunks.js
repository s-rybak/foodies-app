import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAreas } from "../../services/areas";

export const fetchAreas = createAsyncThunk(
  "areas/fetchAreas",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAreas();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
