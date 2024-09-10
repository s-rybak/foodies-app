import css from "./RecipeTitle.module.css";

function RecipeTitle({ children }) {
	return <h2 className={css.title}>{children}</h2>;
}

export default RecipeTitle;
