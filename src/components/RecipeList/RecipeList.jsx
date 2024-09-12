import { useSelector } from "react-redux";
import css from "./RecipeList.module.css";

const RecipeList = () => {
  const { recipes } = useSelector(selectRecipes);

  return (
    <div className={css.container}>
      {recipes.map((item) => (
        <RecipeCard {...item} />
      ))}
    </div>
  );
};

export default RecipeList;
