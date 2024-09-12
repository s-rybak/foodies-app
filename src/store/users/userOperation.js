import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const userData = await response.json();
      console.log('userData in userOperation', userData);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
