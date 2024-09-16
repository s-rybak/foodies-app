import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoadingFavorite} from "../../../redux/recipes/recipesSelectors";
import {
	addFavoriteRecipe,
	removeFromFavoriteRecipe,
} from "../../../redux/recipes/recipesOperations";
import css from "./RecipeCardFavoriteButton.module.css";
import icons from "assets/img/icons/icons.svg";

function RecipeCardFavoriteButton({ idRecipe, favorite }) {
	const [isFavorite, setIsFavorite] = useState(favorite);
	const dispatch = useDispatch();

	const loading = useSelector(selectIsLoadingFavorite);


	const handleAddToFavorite = async (id) => {
		if (loading) return;
		setIsFavorite(true);
		dispatch(addFavoriteRecipe(id));

	};

	const handleRemoveFromFavorite = async (id) => {
		if (loading) return;
		setIsFavorite(false);
		dispatch(removeFromFavoriteRecipe(id));
	};
	return (
		<>
			{isFavorite ? (
				<button
					className={css.btn}
					type="button"
					onClick={() => handleRemoveFromFavorite(idRecipe)}>
					<svg className={css.icon}>
						<use href={`${icons}#icon-heart`}></use>
					</svg>
				</button>
			) : (
				<button
					className={css.btn}
					type="button"
					onClick={() => handleAddToFavorite(idRecipe)}>
					<svg className={css.icon}>
						<use href={`${icons}#icon-heart-outline`}></use>
					</svg>
				</button>
			)}
		</>
	);
}

export default RecipeCardFavoriteButton;
