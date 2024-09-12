//import style from './Recipe.module.css'

import RecipeInfo from "components/Recipe/RecipeInfo/RecipeInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/recipes/recipesOperations";
import {
	selectRecipeIsLoading,
	selectRecipeIsError,
	selectRecipe,
} from "../../redux/recipes/recipesSelectors";

export default function Recipe() {
	const isLoading = useSelector(selectRecipeIsLoading);
	const error = useSelector(selectRecipeIsError);
	const recipeById = useSelector(selectRecipe);

	const dispatch = useDispatch();

	const recipeId = "a755bcdd-1c57-4be4-a43b-4dedd24424ba";

	useEffect(() => {
		dispatch(getRecipeById(recipeId));
	}, [dispatch, recipeId]);

	useEffect(() => {
		console.log(recipeById);
	}, [recipeById]);

	return (
		<>
			{isLoading && error ? (
				<p>Loading</p>
			) : (
				<RecipeInfo
					title={recipeById.title}
					category={recipeById.category.name}
					time={`${recipeById.time} min`}
					description={recipeById.description}
					authorName={recipeById.user.name}
					authorId={recipeById.user.id}
					preparation={recipeById.instructions}
					ingredients={recipeById.ingredients}
					recipeId={recipeId}
				/>
			)}
		</>
	);
}
