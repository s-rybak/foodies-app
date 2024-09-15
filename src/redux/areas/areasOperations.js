import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";

export const fetchAreas = createAsyncThunk("getAreas", async ({limit = 100} = {}, thunkAPI) => {
  try {
    const res = await  api.get(`/areas?limit=${limit}`);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
