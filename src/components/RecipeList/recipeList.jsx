import {RecipeCard} from "../RecipeCard/RecipeCard";
import style from './recipeList.module.css';
import {useEffect} from "react";
import {getFavoriteRecipes} from "../../redux/recipes/recipesOperations";
import {useDispatch, useSelector} from "react-redux";
import {selectFavoriteRecipes} from "../../redux/recipes/recipesSelectors";

const RecipeList = ({recipes}) => {
	const dispatch = useDispatch();
	const favoriteRecipes = useSelector(selectFavoriteRecipes);


	useEffect(() => {
		dispatch(getFavoriteRecipes());
	}, [dispatch]);

	const isFavorite = (id) => {
		const isFavorite = favoriteRecipes.findIndex((recipe) => recipe.recipeId === id);
		return isFavorite !== -1;
	}



  return (
		<div className={style['recipes-list']}>
			{
				recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} isFavorite={isFavorite(recipe.id)} />
				))
			}
		</div>
	);
};

export default RecipeList;
