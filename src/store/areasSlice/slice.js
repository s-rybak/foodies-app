import { createSlice } from "@reduxjs/toolkit";
import { fetchAreas } from "./thunks";

export const areasSlice = createSlice({
  name: "areas",
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAreas.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAreas.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchAreas.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const areasReducer = areasSlice.reducer;
