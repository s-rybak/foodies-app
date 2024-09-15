import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteRecipes } from "../../../redux/recipes/recipesSelectors";
import {
	addFavoriteRecipe,
	getFavoriteRecipes,
	removeFromFavoriteRecipe,
} from "../../../redux/recipes/recipesOperations";
import css from "./RecipeCardFavoriteButton.module.css";
import icons from "assets/img/icons/icons.svg";

function RecipeCardFavoriteButton({ idRecipe }) {
	const [isFavorite, setIsFavorite] = useState(false);
	const dispatch = useDispatch();

	const {favoriteRecipes} = useSelector(selectFavoriteRecipes);

	useEffect(() => {
		if (
			favoriteRecipes && favoriteRecipes.findIndex((recipe) => recipe.recipeId === idRecipe) === -1
		) {
			setIsFavorite(false);
			return;
		}
		setIsFavorite(true);
	}, [favoriteRecipes,idRecipe,setIsFavorite]);

	const handleAddToFavorite = async (id) => {
		dispatch(addFavoriteRecipe(idRecipe));
		dispatch(getFavoriteRecipes());
		setIsFavorite(true);
	};

	const handleRemoveFromFavorite = async (id) => {
		dispatch(removeFromFavoriteRecipe(idRecipe));
		dispatch(getFavoriteRecipes());
		setIsFavorite(false);
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
