import { createSlice } from "@reduxjs/toolkit";
import { getRecipeById } from "./recipesOperations";

const initialState = {
	selectedRecipe: null,
	recipes: null,
	favoriteRecipe: null,
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
			}),
});

export const recipesReducer = recipeSlice.reducer;
