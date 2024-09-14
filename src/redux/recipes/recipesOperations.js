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

export const getFavoriteRecipes = createAsyncThunk(
	"recipes/getFavoriteRecipes",
	async (_, thunkApi) => {
		try {
			const { data } = await api.get("api/recipes/favorites?page=1&limit=100");
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);

export const addFavoriteRecipes = createAsyncThunk(
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
