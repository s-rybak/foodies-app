import SharedLayout from 'layout/SharedLayout/SharedLayout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Category = lazy(() => import('pages/Category/Category.jsx'));
const Recipe = lazy(() => import('pages/Recipe/Recipe.jsx'));
const UserPage = lazy(() => import('pages/UserPage/UserPage.jsx'));
const NotFound = lazy(() => import('pages/NotFound/NotFound.jsx'));

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/category' element={<Category />} />
            <Route path='/user/:id' element={<UserPage />} />
            <Route path='/recipe/:recipeId' element={<Recipe />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
