import ButtonOutline from "components/Buttons/ButtonOutline/ButtonOutline";
import { useEffect, useState } from "react";

import css from "./RecipeFavoriteButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	selectFavoriteRecipes,
	selectIsErrorFavorite,
	selectIsLoadingFavorite,
} from "../../../redux/recipes/recipesSelectors";
import {
	addFavoriteRecipe,
	getFavoriteRecipes,
	removeFromFavoriteRecipe,
} from "../../../redux/recipes/recipesOperations";
import AnimationLoader from "../../Loader/AnimationLoader.jsx";

function RecipeFavoriteButton({ recipeId }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const isLoadingFavorite = useSelector(selectIsLoadingFavorite);
	const isErrorFavorite = useSelector(selectIsErrorFavorite);
	const favoriteRecipes = useSelector(selectFavoriteRecipes);

	const dispatch = useDispatch();

	const toggleFavorite = () => {
		if (isFavorite) {
			dispatch(removeFromFavoriteRecipe(recipeId));
			dispatch(getFavoriteRecipes());
			setIsFavorite(false);
			return;
		}
		dispatch(addFavoriteRecipe(recipeId));
		dispatch(getFavoriteRecipes());
		setIsFavorite(true);
	};

	useEffect(() => {
		dispatch(getFavoriteRecipes());
	}, [dispatch]);

	useEffect(() => {
		if (
			favoriteRecipes && favoriteRecipes.findIndex((recipe) => recipe.recipeId === recipeId) === -1
		) {
			setIsFavorite(false);
			return;
		}
		setIsFavorite(true);
	}, []);

	return (
		<ButtonOutline
			onClick={toggleFavorite}
			className={css.button}>
			{isFavorite && !isLoadingFavorite && !isErrorFavorite ? (
				"Remove from favorites"
			) : isLoadingFavorite ? (
				<AnimationLoader className={css.loader} />
			) : isErrorFavorite ? (
				"Error Occured"
			) : (
				"Add to favorites"
			)}
		</ButtonOutline>
	);
}

export default RecipeFavoriteButton;
