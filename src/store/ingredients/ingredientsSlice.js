import { createSlice } from "@reduxjs/toolkit";

import { fetchIngredients } from "./ingredientsOperations.js";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, handlePending)
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.areas = action.payload;
      })
      .addCase(fetchIngredients.rejected, handleRejected);
  },
});

export default ingredientsSlice.reducer;
