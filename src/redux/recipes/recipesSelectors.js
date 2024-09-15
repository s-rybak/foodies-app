export const selectRecipe = (state) => state.recipes.selectedRecipe;

export const selectRecipeIsLoading = (state) => state.recipes.isLoading;

export const selectRecipeIsError = (state) => state.recipes.isError;

export const selectFavoriteRecipes = (state) => state.recipes.favoriteRecipes;

export const selectIsLoadingFavorite = (state) =>
	state.recipes.isLoadingFavorite;

export const selectIsErrorFavorite = (state) => state.recipes.isErrorFavorite;

export const selectLastCreatedRecipe = (state) =>
	state.recipes.recipeCreate.lastCreatedRecipe;

export const selectRecipeCreateIsLoading = (state) =>
	state.recipes.recipeCreate.isLoading;

export const selectRecipeCreateIsError = (state) =>
	state.recipes.recipeCreate.isError;

export const selectRecipeDeleteIsLoading = (state) =>
	state.recipes.recipeDelete.isLoading;

export const selectRecipeDeleteIsError = (state) =>
	state.recipes.recipeDelete.isError;

export const selectPopularRecipes = (state) => state.recipes.popularRecipes;

export const selectIsLoadingPopular = (state) => state.recipes.isLoadingPopular;

export const selectIsErrorPopular = (state) => state.recipes.isErrorPopular;
