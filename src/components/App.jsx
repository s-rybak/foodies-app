import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "layout/SharedLayout/SharedLayout.jsx";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../redux/auth/authSelectors";
import { setToken } from "../services/api";

const Home = lazy(() => import("pages/Home/Home.jsx"));
const Category = lazy(() => import("pages/Category/Category.jsx"));
const Recipe = lazy(() => import("pages/Recipe/Recipe.jsx"));
const UserPage = lazy(() => import("pages/UserPage/UserPage.jsx"));
const NotFound = lazy(() => import("pages/NotFound/NotFound.jsx"));
const AddRecipe = lazy(() => import("pages/AddRecipe/AddRecipe.jsx"));

export const App = () => {
  const token = useSelector(selectAuthToken);

  if (token) {
    setToken(token);
  }

  return (
    <BrowserRouter basename="/foodies-app">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/recipe/add" element={<AddRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
