import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
