import css from "./RecipeList.module.css";

const RecipeList = ({ children }) => {
  return <ul className={css.recipe_list}>{children}</ul>;
};

export default RecipeList;
