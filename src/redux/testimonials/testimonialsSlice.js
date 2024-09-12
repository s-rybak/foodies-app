import { createSlice } from "@reduxjs/toolkit";
import { fetchTestimonials } from "./operations";

const initialState = {
  testimonials: [],
  isLoading: false,
  error: null,
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.fulfilled, (state, { payload }) => {
        state.testimonials = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        (a) => a.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (a) => a.type.endsWith("rejected"),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export default testimonialsSlice.reducer;
