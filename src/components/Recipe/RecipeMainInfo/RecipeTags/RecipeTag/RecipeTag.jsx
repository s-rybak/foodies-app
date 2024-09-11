import css from "./RecipeTag.module.css";

function RecipeTag({ children }) {
	return <p className={css.tag}>{children}</p>;
}

export default RecipeTag;
