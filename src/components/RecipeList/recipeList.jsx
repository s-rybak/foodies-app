import {RecipeCard} from "../RecipeCard/RecipeCard";
import style from './recipeList.module.css';

const RecipeList = ({recipes}) => {

  return (
		<div className={style['recipes-list']}>
			{
				recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe}/>
				))
			}
		</div>
	);
};

export default RecipeList;
