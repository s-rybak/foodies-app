import { createSlice } from '@reduxjs/toolkit';
import { fetchFollowing, followUser, unfollowUser, fetchUser } from './userOperation';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    followingUsers: [],
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
      // Додавання користувачів, за якими стежить авторизований користувач
      .addCase(fetchFollowing.fulfilled, (state, action) => {
        state.followingUsers = action.payload;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.followingUsers.push(action.payload); // додаємо користувача в список
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.followingUsers = state.followingUsers.filter(
          userId => userId !== action.payload
        ); // видаляємо користувача зі списку
      });
  },
});

export default userSlice.reducer;