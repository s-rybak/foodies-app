import SharedLayout from 'layout/SharedLayout/SharedLayout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from "./shared/PrivateRoute/PrivateRoute";

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Category = lazy(() => import('pages/Category/Category.jsx'));
const Recipe = lazy(() => import('pages/Recipe/Recipe.jsx'));
const NotFound = lazy(() => import('pages/NotFound/NotFound.jsx'));
const AddRecipe = lazy(() => import("pages/AddRecipe/AddRecipe"));


export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/add" element={<PrivateRoute component={AddRecipe} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>      
    </BrowserRouter>
  );
};