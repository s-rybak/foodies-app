import { createSlice } from "@reduxjs/toolkit";
import {
	getRecipeById,
	getFavoriteRecipes,
	addFavoriteRecipes,
	removeFromFavoriteRecipe,
} from "./recipesOperations";

const initialState = {
	selectedRecipe: null,
	recipes: null,
	favoriteRecipes: [],
	favoriteRecipesNew: [],
	isLoading: false,
	isError: null,
};

const recipeSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		toggleFavoriteRecipe(state, action) {
			const foundfavoriteRecipeIndex = state.favoriteRecipes.findIndex(
				(recipe) => recipe.id === action.payload.id,
			);
			if (foundfavoriteRecipeIndex !== -1) {
				state.favoriteRecipes.splice(foundfavoriteRecipeIndex, 1);
				return;
			}
			state.favoriteRecipes.push(action.payload);
		},
	},
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
				state.isLoading = true;
				state.isError = null;
			})
			.addCase(getFavoriteRecipes.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.payload;
			})
			.addCase(getFavoriteRecipes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.favoriteRecipesNew = action.payload;
			}),
});

export const { toggleFavoriteRecipe } = recipeSlice.actions;

export const recipesReducer = recipeSlice.reducer;
