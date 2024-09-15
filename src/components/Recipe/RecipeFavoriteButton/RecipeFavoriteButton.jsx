import ButtonOutline from "components/Buttons/ButtonOutline/ButtonOutline";
import { useEffect, useState } from "react";

import css from "./RecipeFavoriteButton.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { toggleFavoriteRecipe } from "../../../redux/recipes/recipesSlice";
import {
	selectFavoriteRecipes,
	selectRecipe,
} from "../../../redux/recipes/recipesSelectors";
import { addFavoriteRecipe } from "redux/recipes/recipesOperations";

function RecipeFavoriteButton({ recipeId }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const currentRecipe = useSelector(selectRecipe);
	const favoriteRecipes = useSelector(selectFavoriteRecipes);

	const dispatch = useDispatch();

	const toggleFavorite = () => {
		dispatch(addFavoriteRecipe(recipeId));
		// dispatch(toggleFavoriteRecipe(currentRecipe));
	};

	useEffect(() => {
		if (
			favoriteRecipes.findIndex((recipe) => recipe.id === currentRecipe.id) ===
			-1
		) {
			setIsFavorite(false);
			return;
		}
		setIsFavorite(true);
	}, [favoriteRecipes, currentRecipe.id]);

	return (
		<ButtonOutline
			onClick={toggleFavorite}
			className={css.button}>
			{isFavorite ? "Remove from favorites" : "Add to favorites"}
		</ButtonOutline>
	);
}

export default RecipeFavoriteButton;
