import SharedLayout from "layout/SharedLayout/SharedLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("pages/Home/Home.jsx"));
const Category = lazy(() => import("pages/Category/Category.jsx"));
const Recipe = lazy(() => import("pages/Recipe/Recipe.jsx"));
const Profile = lazy(() => import("pages/Profile/Profile.jsx"));
const NotFound = lazy(() => import("pages/NotFound/NotFound.jsx"));

export const App = () => {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route
					path="/"
					element={<SharedLayout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="/category"
						element={<Category />}
					/>
					<Route
						path="/recipe/:recipeId"
						element={<Recipe />}
					/>
					<Route
						path="/user/:authorId"
						element={<Profile />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
