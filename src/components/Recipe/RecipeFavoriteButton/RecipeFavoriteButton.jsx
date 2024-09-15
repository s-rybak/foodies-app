import ButtonOutline from "components/Buttons/ButtonOutline/ButtonOutline";
import { useState } from "react";

import css from "./RecipeFavoriteButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	selectIsErrorFavorite,
	selectIsLoadingFavorite,
} from "../../../redux/recipes/recipesSelectors";
import {
	addFavoriteRecipe,
	removeFromFavoriteRecipe,
} from "../../../redux/recipes/recipesOperations";
import AnimationLoader from "../../Loader/AnimationLoader.jsx";

function RecipeFavoriteButton({ recipeId, favorite }) {
	const [isFavorite, setIsFavorite] = useState(favorite);
	const isLoadingFavorite = useSelector(selectIsLoadingFavorite);
	const isErrorFavorite = useSelector(selectIsErrorFavorite);

	const dispatch = useDispatch();

	const toggleFavorite = () => {
		if (isFavorite) {
			dispatch(removeFromFavoriteRecipe(recipeId));
			setIsFavorite(false);
			return;
		}
		dispatch(addFavoriteRecipe(recipeId));
		setIsFavorite(true);
	};



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
