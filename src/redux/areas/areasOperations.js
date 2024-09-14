import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";

export const fetchAreas = createAsyncThunk("getAreas", async (_, thunkAPI) => {
  try {
    const res = await  api.get("/api/areas");
    return res.data;
  } catch (error) {
    console.log("error", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});