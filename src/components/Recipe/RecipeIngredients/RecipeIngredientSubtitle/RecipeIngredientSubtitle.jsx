import css from "./RecipeIngredientSubtitle.module.css";

function RecipeIngredientSubtitle({ children }) {
	return <p className={css.text}>{children}</p>;
}

export default RecipeIngredientSubtitle;
