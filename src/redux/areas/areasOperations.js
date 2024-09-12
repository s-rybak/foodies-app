import { createAsyncThunk } from "@reduxjs/toolkit";

import { areasApi } from "../../services/api.js";

export const fetchAreas = createAsyncThunk("getAreas", async (_, thunkAPI) => {
  try {
    const res = await areasApi.getAreas();
    return res.data;
  } catch (error) {
    console.log("error", error);

    return thunkAPI.rejectWithValue(error.message);
  }
});
