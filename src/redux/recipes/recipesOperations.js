import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "services/api";

export const getRecipeById = createAsyncThunk(
	"recipes/getRecipeById",
	async (id, thunkApi) => {
		try {
			const { data } = await api.get(`api/recipes/${id}`);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const getUserRecipes = createAsyncThunk(
    'recipes/getUserRecipes',
    async ({ limit, page }, thunkApi) => {
        try {
            const { data } = await api.get(`/api/recipes/my-recipes`, {
                params: { limit, page },
            });
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const getFavorites = createAsyncThunk(
    'recipes/getFavorites',
    async ({limit, page}, thunkApi) => {
        try {
            const { data } = await api.get(`/api/recipes/favorites`,{
                params: { limit, page },
            });
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const createRecipe = createAsyncThunk(
	"recipes/createRecipe",
	async (recipe, thunkApi) => {
		try {
			const formData = new FormData();
			Object.keys(recipe).forEach((key) => {
				if (key === "ingredients") {
					recipe.ingredients.forEach((ingredient, index) => {
						Object.keys(ingredient).forEach((ingredientKey) => {
							formData.append(
								`ingredients[${index}][${ingredientKey}]`,
								ingredient[ingredientKey],
							);
						});
					});
				} else {
					formData.append(key, recipe[key]);
				}
			});
			const { data } = await api.post("api/recipes", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const deleteRecipe = createAsyncThunk(
	"recipes/deleteRecipe",
	async (id, thunkApi) => {
		try {
			await api.delete(`api/recipes/${id}`);
			return id;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const getFavoriteRecipes = createAsyncThunk(
	"recipes/getFavoriteRecipes",
	async (_, thunkApi) => {
		try {
			const { data } = await api.get("api/recipes/favorites?page=1&limit=100");
			return data.favoriteRecipes;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const addFavoriteRecipe = createAsyncThunk(
	"recipes/addFavoriteRecipe",
	async (id, thunkApi) => {
		try {
			const { data } = await api.post(`/api/recipes/${id}/favorites`);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const removeFromFavoriteRecipe = createAsyncThunk(
	"recipes/removeFromFavoriteRecipe",
	async (id, thunkApi) => {
		try {
			const { data } = await api.delete(`/api/recipes/${id}/favorites`);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const getPopularRecipes = createAsyncThunk(
	"recipes/getPopularRecipes",
	async (limit, thunkApi) => {
		try {
			const { data } = await api.get(
				`/api/recipes/popular?page=1&limit=${limit}`,
			);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);
