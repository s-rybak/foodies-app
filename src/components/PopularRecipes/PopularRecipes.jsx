import style from "./PopularRecipes.module.css";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import {
	selectFavoriteRecipes,
	selectPopularRecipes,
} from "../../redux/recipes/recipesSelectors";
import { useEffect } from "react";
import {getFavoriteRecipes, getPopularRecipes} from "../../redux/recipes/recipesOperations";

const PopularRecipes = () => {
	const dispatch = useDispatch();
	const PopularRecipes = useSelector(selectPopularRecipes);
	const favoriteRecipes = useSelector(selectFavoriteRecipes);


	useEffect(() => {
		dispatch(getFavoriteRecipes());
	}, [dispatch]);

	const isFavorite = (id) => {
		const isFavorite = favoriteRecipes.findIndex((recipe) => recipe.recipeId === id);
		return isFavorite !== -1;
	}

	useEffect(() => {
		dispatch(getPopularRecipes(4));
	}, [dispatch]);

	return (
		<div className={style["popular-recipes"]}>
			<h2 className={style["popular-title"]}>Popular Recipes</h2>
			<ul className={style["recipes-list"]}>
				{PopularRecipes.map((recipe) => (
					<li
						key={recipe.id}
						className={style["recipe-item"]}>
						{<RecipeCard recipe={recipe} isFavorite={isFavorite(recipe.id)} />}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PopularRecipes;
