import { nanoid } from "@reduxjs/toolkit";
import css from "./RecipeTags.module.css";
import RecipeTag from "./RecipeTag/RecipeTag";

function RecipeTags({ tags }) {
	return (
		<ul className={css.list}>
			{tags.map((tag) => (
				<li key={nanoid()}>
					<RecipeTag>{tag}</RecipeTag>
				</li>
			))}
		</ul>
	);
}

export default RecipeTags;
