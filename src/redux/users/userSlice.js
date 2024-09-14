import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFollowing,
  followUser,
  unfollowUser,
  fetchUser,
  fetchFollowers,
} from './userOperation';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    followingUsers: [],
    followers: [],
    loading: false,
    error: null,
  },
  reducers: {},
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
        state.loading = false;
      })

      .addCase(fetchFollowing.fulfilled, (state, action) => {
        state.followingUsers = action.payload.map(user => user.id);
      })
      .addCase(fetchFollowers.fulfilled, (state, action) => {
        state.followers = action.payload.users;
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
