import css from "./RecipeIngredientTitle.module.css";

function RecipeIngredientTitle({ children }) {
	return <h4 className={css.title}>{children}</h4>;
}

export default RecipeIngredientTitle;
