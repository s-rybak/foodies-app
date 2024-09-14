import {createAsyncThunk} from "@reduxjs/toolkit";

import api from "services/api";

export const fetchTestimonials = createAsyncThunk(
    "testimonials/fetchTestimonials",
    async (_, thunkApi) => {
        try {
            const {data: {testimonials}} = await api.get("/api/testimonials?page=1&limit=3");
            return testimonials;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);
