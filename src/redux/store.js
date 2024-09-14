import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {authReducer} from "./auth/authSlice";
import categoriesReducer from "./categories/categoriesSlice";
import {recipesReducer} from "./recipes/recipesSlice";
import testimonialsReducer from "./testimonials/testimonialsSlice";
import userReducer from "./users/userSlice";
import areasReducer from "./areas/areasSlice";
import ingredientsReducer from "./ingredients/ingredientsSlice";
import { modalReducer } from "./modals/modalSlice";

const authConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

const recipeConfig = {
  key: 'recipes',
  storage,
  whitelist: ['favoriteRecipes'],
};

/**
 * A store that holds the whole state tree of the application.
 */
const store = configureStore({
    reducer: {
        auth: persistReducer(authConfig, authReducer),
        categories: categoriesReducer,
        recipes: persistReducer(recipeConfig, recipesReducer),
        testimonials: testimonialsReducer,
        user: userReducer,
        areas: areasReducer,
        ingredients: ingredientsReducer,
        modals: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});

export const persistor = persistStore(store);

export default store;



