import { lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { refreshUser } from "../redux/auth/authOperations";

import SharedLayout from "layout/SharedLayout/SharedLayout.jsx";
import { Verify } from "pages/Verify/Verify";

const Home = lazy(() => import("pages/Home/Home.jsx"));
const Category = lazy(() => import("pages/Category/Category.jsx"));
const Recipe = lazy(() => import("pages/Recipe/Recipe.jsx"));
const UserInfo = lazy(() => import("pages/Profile/UserInfo/UserInfo"));
const NotFound = lazy(() => import("pages/NotFound/NotFound.jsx"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/foodies-app">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/user/:id" element={<UserInfo />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
          <Route path="/auth/verify/:token" element={<Verify />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
