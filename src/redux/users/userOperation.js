import {createAsyncThunk} from "@reduxjs/toolkit";

import api from "services/api";

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await api.get(`/api/users/${id}`);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const uploadAvatar = createAsyncThunk(
    "user/uploadAvatar",
    async (avatar, {rejectWithValue}) => {
        try {
            const formData = new FormData();
            formData.append("avatar", avatar);
            const {data} = await api.patch("/api/users/avatars", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchFollowing = createAsyncThunk(
    'user/fetchFollowing',
    async ({userId, limit, page}, { rejectWithValue }) => {
      try {
        const { data } = await api.get(`/api/users/${userId}/following`, {
          params: { limit, page },
        });
        return data.usersFollowing;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  //  a list of users who follow the user
  export const fetchFollowers = createAsyncThunk(
    'user/fetchFollowers',
    async ({userId, limit, page}, { rejectWithValue }) => {
      try {
        const { data } = await api.get(`/api/users/${userId}/followers`, {
          params: { limit, page },
        });
        return data.followers;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  //   follow Of the user
  export const followUser = createAsyncThunk(
    'user/followUser',
    async (userId, { rejectWithValue }) => {
      try {
        await api.post(`/api/users/${userId}/follow`);
        return userId;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  //   unfollow Of the user
  export const unfollowUser = createAsyncThunk(
    'user/unfollowUser',
    async (userId, { rejectWithValue }) => {
      try {
        await api.delete(`/api/users/${userId}/follow`);
        return userId;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
