import SharedLayout from "layout/SharedLayout/SharedLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const NotFound = lazy(() => import("pages/NotFound/NotFound.jsx"));
const Home = lazy(() => import("pages/Home/Home.jsx"));
const Category = lazy(() => import("pages/Category/Category.jsx"));
const Recipe = lazy(() => import("pages/Recipe/Recipe.jsx"));
const UserInfo = lazy(() => import("pages/Profile/UserInfo/UserInfo"));

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/user/:id" element={<UserInfo />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
