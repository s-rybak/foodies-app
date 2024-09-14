import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "services/api";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (id, { rejectWithValue }) => {
    console.log("id: ", id);
    try {
      const { data } = await api.get(`/api/users/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  "user/uploadAvatar",
  async (avatar, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      const { data } = await api.patch("/api/users/avatars", formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updloadAvatar = createAsyncThunk(
    'user/uploadAvatar',
    async (avatar, {rejectWithValue}) => {
        try {
            const formData = new FormData();
            formData.append('avatar', avatar);
            const {data} = await api.patch('/api/users/avatar', formData);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);