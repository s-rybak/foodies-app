import { configureStore } from "@reduxjs/toolkit";
import areas from "./areas/areasSlice";

const store = configureStore({
  reducer: {
    areas,
  },
});

export default store;
