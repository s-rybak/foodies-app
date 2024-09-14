import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {createRecipe,deleteRecipe, getRecipeById} from "./recipesOperations";

const initialState = {
	selectedRecipe: null,
	recipes: null,
	favoriteRecipes: [],
	isLoading: false,
	isError: null,
	recipeCreate:{
		lastCreatedRecipe:null,
		isLoading: false,
		isError: null,
	},
	recipeDelete:{
		isLoading: false,
		isError: null,
	}
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
			.addCase(createRecipe.pending, (state) => {
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
			.addCase(deleteRecipe.pending, (state) => {
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
	,
});

export const { toggleFavoriteRecipe } = recipeSlice.actions;

export const recipesReducer = recipeSlice.reducer;
