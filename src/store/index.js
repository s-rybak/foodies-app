import { configureStore } from "@reduxjs/toolkit";
import areas from "./areasSlice/areasSlice";

const store = configureStore({
  reducer: {
    areas,
  },
});

export default store;
