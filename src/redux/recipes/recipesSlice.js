import {createSlice} from "@reduxjs/toolkit";
import {
    getRecipeById,
    createRecipe,
    deleteRecipe,
    getFavoriteRecipes,
    addFavoriteRecipe,
    removeFromFavoriteRecipe,
    getPopularRecipes,
    getUserRecipes,
    getFavorites, queryRecipes,
} from "./recipesOperations";

const initialState = {
    selectedRecipe: null,
    favoriteRecipes: [],
    myFavorites: {
        total: 0,
        favoriteRecipes: [],
    },
    recipes: {
        total: 0,
        result: [],
    },
    isLoadingFavorite: false,
    isErrorFavorite: null,
    isLoading: false,
    isError: null,
    popularRecipes: [],
    isLoadingPopular: false,
    isErrorPopular: null,
    recipeCreate: {
        lastCreatedRecipe: null,
        isLoading: false,
        isError: null,
    },
    recipeDelete: {
        isLoading: false,
        isError: null,
    },
    queryRecipes: {
        isLoading: false,
        isError: null,
        result: {
            total: 0,
            recipes: [],
        }
    }
};

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    extraReducers: (builder) =>
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
            .addCase(getPopularRecipes.pending, (state, action) => {
                state.isLoadingPopular = true;
                state.isErrorPopular = null;
            })
            .addCase(getPopularRecipes.rejected, (state, action) => {
                state.isLoadingPopular = false;
                state.isErrorPopular = action.payload;
            })
            .addCase(getPopularRecipes.fulfilled, (state, action) => {
                state.isLoadingPopular = true;
                state.popularRecipes = action.payload;
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
            })
            .addCase(queryRecipes.pending, state => {
                state.queryRecipes.isLoading = true;
                state.queryRecipes.isError = null;
            })
            .addCase(queryRecipes.rejected, (state, action) => {
                state.queryRecipes.isLoading = false;
                state.queryRecipes.isError = action.payload;
            })
            .addCase(queryRecipes.fulfilled, (state, action) => {
                state.queryRecipes.isLoading = false;
                state.queryRecipes.result = action.payload;
            }),
});

export const recipesReducer = recipeSlice.reducer;
