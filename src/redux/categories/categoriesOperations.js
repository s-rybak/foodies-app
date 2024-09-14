import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api.js";

export const fetchCategories = createAsyncThunk(
	"getCategories",
	async (_, thunkAPI) => {
		try {
			const res = await api.get("/api/categories");
			return res.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const fetchMoreCategories = createAsyncThunk(
	"getMoreCategories",
	async (value, thunkAPI) => {
		try {
			const res = await api.get(`/api/categories?page=${value}`);
			return res.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
