import { createSlice } from '@reduxjs/toolkit';

import {
  fetchFollowers,
  fetchFollowing,
  fetchUser,
  followUser,
  unfollowUser,
  uploadAvatar,
} from './userOperation.js';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    followingUsers: {
      total: 0,
      result: [],
    },
    followers: {
      total: 0,
      result: [],
    },
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
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
        state.user.avatar = action.payload.avatar;
      })
      .addCase(fetchFollowing.fulfilled, (state, action) => {
        state.followingUsers = action.payload;
      })
      .addCase(fetchFollowers.fulfilled, (state, action) => {
        state.followers = action.payload;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.followingUsers.push(action.payload);
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.followingUsers = state.followingUsers.filter(
          userId => userId !== action.payload
        );
      });
  },
});

export default userSlice.reducer;
