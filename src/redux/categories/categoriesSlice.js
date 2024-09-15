import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCategories,
  fetchMoreCategories,
} from "./categoriesOperations.js";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, handleRejected)
      .addCase(fetchMoreCategories.pending, handlePending)
      .addCase(fetchMoreCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories.result.push(...action.payload.result);
      })
      .addCase(fetchMoreCategories.rejected, handleRejected);
  },
});

export default categoriesSlice.reducer;
