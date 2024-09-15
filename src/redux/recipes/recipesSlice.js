import { createSlice } from '@reduxjs/toolkit';
import {
  createRecipe,
  deleteRecipe, getFavorites,
  getRecipeById,
  getUserRecipes,
} from './recipesOperations';

const initialState = {
  selectedRecipe: null,
  recipes: {
    total: 0,
    result: [],
  },
  favoriteRecipes: [],
  myFavorites: {
    total: 0,
    favoriteRecipes: [],
  },
  isLoading: false,
  isError: null,
  recipeCreate: {
    lastCreatedRecipe: null,
    isLoading: false,
    isError: null,
  },
  recipeDelete: {
    isLoading: false,
    isError: null,
  },
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getFavorites.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myFavorites = action.payload;
      })
      .addCase(getRecipeById.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedRecipe = action.payload;
      })
      .addCase(createRecipe.pending, state => {
        state.recipeCreate.isLoading = true;
        state.recipeCreate.isError = null;
      })
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.recipeCreate.isLoading = false;
        state.recipeCreate.lastCreatedRecipe = action.payload;
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.recipeCreate.isLoading = false;
        state.recipeCreate.isError = action.payload;
      })
      .addCase(deleteRecipe.pending, state => {
        state.recipeDelete.isLoading = true;
        state.recipeDelete.isError = null;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.recipeDelete.isLoading = false;
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.recipeDelete.isLoading = false;
        state.recipeDelete.isError = action.payload;
      })
      .addCase(getUserRecipes.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getUserRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getUserRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload;
      }),
});

export const { toggleFavoriteRecipe } = recipeSlice.actions;

export const recipesReducer = recipeSlice.reducer;
