import {RecipeCard} from "../RecipeCard/RecipeCard";
import style from './recipeList.module.css';

const RecipeList = ({recipes, addFavorite}) => {

  return (
		<div className={style['recipes-list']}>
			{
				recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} clickToFavorite={addFavorite}/>
				))
			}
		</div>
	);
};

export default RecipeList;
