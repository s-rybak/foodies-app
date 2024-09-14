import { lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useDispatch} from "react-redux";
import { refreshUser } from "../redux/auth/authOperations";

import SharedLayout from "layout/SharedLayout/SharedLayout.jsx";
import PrivateRoute from "./shared/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("pages/Home/Home.jsx"));
const Category = lazy(() => import("pages/Category/Category.jsx"));
const Recipe = lazy(() => import("pages/Recipe/Recipe.jsx"));
const UserPage = lazy(() => import('pages/UserPage/UserPage.jsx'));
const NotFound = lazy(() => import("pages/NotFound/NotFound.jsx"));
const AddRecipe = lazy(() => import("pages/AddRecipe/AddRecipe.jsx"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch]);

  return (
    <BrowserRouter basename="/foodies-app">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/user/:id" element={<UserPage/>} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
          <Route path="/recipe/add" element={<PrivateRoute component={AddRecipe} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
