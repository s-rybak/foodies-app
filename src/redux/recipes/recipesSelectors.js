export const selectRecipe = (state) => state.recipes.selectedRecipe;

export const selectRecipeIsLoading = (state) => state.recipes.isLoading;

export const selectRecipeIsError = (state) => state.recipes.isError;

export const selectFavoriteRecipes = (state) => state.recipes.favoriteRecipes;
