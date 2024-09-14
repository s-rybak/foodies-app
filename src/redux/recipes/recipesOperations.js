import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'services/api';

export const getRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (id, thunkApi) => {
    try {
      const { data } = await api.get(`api/recipes/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserRecipes = createAsyncThunk(
  'recipes/getUserRecipes',
  async ({ limit, page }, thunkApi) => {
    try {
      const { data } = await api.get(`/api/recipes/my-recipes`, {
        params: { limit, page },
      });
      console.log('data in recipesOperation', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
