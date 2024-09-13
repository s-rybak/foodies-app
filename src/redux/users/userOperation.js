import {createAsyncThunk} from '@reduxjs/toolkit';

import api from "services/api";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await api.get(`/api/users/${id}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
