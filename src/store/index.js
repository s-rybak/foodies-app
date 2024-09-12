import { configureStore } from "@reduxjs/toolkit";
import areas from "./areas/areasSlice";
import ingredients from "./ingredients/ingredientsSlice";

const store = configureStore({
  reducer: {
    areas,
    ingredients,
  },
});

export default store;
