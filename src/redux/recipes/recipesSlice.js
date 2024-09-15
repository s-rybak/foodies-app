import { createSlice } from "@reduxjs/toolkit";
import {
	getRecipeById,
	getFavoriteRecipes,
	addFavoriteRecipe,
	removeFromFavoriteRecipe,
} from "./recipesOperations";

const initialState = {
	selectedRecipe: null,
	favoriteRecipes: [],
	isLoadingFavorite: false,
	isErrorFavorite: null,
	isLoading: false,
	isError: null,
};

const recipeSlice = createSlice({
	name: "recipes",
	initialState,
	extraReducers: (builder) =>
		builder
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
			.addCase(getFavoriteRecipes.pending, (state, action) => {
				state.isLoadingFavorite = true;
				state.isErrorFavorite = null;
			})
			.addCase(getFavoriteRecipes.rejected, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = action.payload;
			})
			.addCase(getFavoriteRecipes.fulfilled, (state, action) => {
				state.isLoadingFavorite = false;
				state.favoriteRecipes = action.payload;
			})
			.addCase(addFavoriteRecipe.pending, (state, action) => {
				state.isLoadingFavorite = true;
				state.isErrorFavorite = null;
			})
			.addCase(addFavoriteRecipe.rejected, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = action.payload;
			})
			.addCase(addFavoriteRecipe.fulfilled, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = null;
			})
			.addCase(removeFromFavoriteRecipe.pending, (state, action) => {
				state.isLoadingFavorite = true;
				state.isErrorFavorite = null;
			})
			.addCase(removeFromFavoriteRecipe.rejected, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = action.payload;
			})
			.addCase(removeFromFavoriteRecipe.fulfilled, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = null;
			}),
});

export const recipesReducer = recipeSlice.reducer;
