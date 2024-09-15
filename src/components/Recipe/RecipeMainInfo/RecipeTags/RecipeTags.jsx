import css from "./RecipeTags.module.css";
import RecipeTag from "./RecipeTag/RecipeTag";

function RecipeTags({ category, time }) {
	return (
		<ul className={css.list}>
			<li>
				<RecipeTag>{category.name}</RecipeTag>
			</li>
			<li>
				<RecipeTag>{`${time} min`}</RecipeTag>
			</li>
		</ul>
	);
}

export default RecipeTags;
