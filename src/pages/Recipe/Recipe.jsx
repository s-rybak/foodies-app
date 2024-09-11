// RecipePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import PathInfo from "components/PathInfo/PathInfo";
import PopularRecipes from "components/PopularRecipes/PopularRecipes";
import style from "./Recipe.module.css";

const RecipePage = () => {
  const { id } = useParams();

  return (
    <div className={style["recipe-page"]}>
      <PathInfo currentPage="Recipe" />
      <RecipeInfo recipeId={id} />
      <PopularRecipes />
    </div>
  );
};

export default RecipePage;
