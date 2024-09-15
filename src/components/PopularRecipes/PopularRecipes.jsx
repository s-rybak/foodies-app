import style from "./PopularRecipes.module.css";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import {
	selectIsErrorPopular,
	selectIsLoadingPopular,
	selectPopularRecipes,
} from "../../redux/recipes/recipesSelectors";
import { useEffect } from "react";
import { getPopularRecipes } from "../../redux/recipes/recipesOperations";
import AnimationLoader from "../Loader/AnimationLoader";

const PopularRecipes = () => {
	const dispatch = useDispatch();
	const PopularRecipes = useSelector(selectPopularRecipes);
	const isLoadingPopular = useSelector(selectIsLoadingPopular);
	const isErrorPopular = useSelector(selectIsErrorPopular);

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
						{<RecipeCard recipe={recipe} />}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PopularRecipes;
