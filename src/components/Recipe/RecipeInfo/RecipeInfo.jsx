import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import css from "./RecipeInfo.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../../redux/recipes/recipesOperations";
import {
	selectRecipeIsLoading,
	selectRecipeIsError,
	selectRecipe,
} from "../../../redux/recipes/recipesSelectors";
import { useLocation } from "react-router-dom";
import AnimationLoader from "../../Loader/AnimationLoader";

function RecipeInfo() {
	const isLoading = useSelector(selectRecipeIsLoading);
	const error = useSelector(selectRecipeIsError);
	const recipeById = useSelector(selectRecipe);

	// Get ID from URL
	const recipeId = useLocation().pathname.split("/recipe/")[1];

	const dispatch = useDispatch();

	useEffect(() => {
		// Recive list of recipe by id from database
		dispatch(getRecipeById(recipeId));
	}, [dispatch, recipeId]);

	return (
		<>
			{isLoading ? (
				<AnimationLoader className={css.loader} />
			) : error ? (
				<p>{error}</p>
			) : recipeById ? (
				<RecipeMainInfo
					thumb={recipeById.thumb}
					title={recipeById.title}
					time={recipeById.time}
					category={recipeById.category}
					description={recipeById.description}
					user={recipeById.user}
					ingredients={recipeById.ingredients}
					instructions={recipeById.instructions}
					recipeId={recipeById.id}
				/>
			) : (
				<p>Recipe not found</p>
			)}
		</>
	);
}

export default RecipeInfo;
