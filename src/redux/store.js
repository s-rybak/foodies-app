import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/authSlice";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

/**
 * A store that holds the whole state tree of the application.
 */
const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);

export default store;



