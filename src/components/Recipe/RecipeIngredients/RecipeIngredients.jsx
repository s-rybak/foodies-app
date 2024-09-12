import SectionTitle from "components/UI/SectionTitle/SectionTitle";
import RecipeIngredient from "./RecipeIngredient/RecipeIngredient";
import { nanoid } from "@reduxjs/toolkit";
import css from "./RecipeIngredients.module.css";

function RecipeIngredients({ ingredients }) {
	return (
		<div>
			<SectionTitle className={css.title}>Ingredients</SectionTitle>
			<ul className={css.list}>
				{ingredients.map((ingredient) => (
					<li
						className={css.item}
						key={nanoid()}>
						<RecipeIngredient
							name={ingredient.name}
							image={ingredient.img}
							amount={ingredient.recipe_ingredients.measure}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default RecipeIngredients;
