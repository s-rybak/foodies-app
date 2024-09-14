import { createSlice } from "@reduxjs/toolkit";

import { fetchUser, uploadAvatar } from "./userOperation.js";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.user.avatar = action.payload.avatar; // Оновлюємо аватарку
      });
  },
});

export default userSlice.reducer;
