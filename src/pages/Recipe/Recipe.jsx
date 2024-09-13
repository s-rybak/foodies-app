// RecipePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import PathInfo from "components/PathInfo/PathInfo";
import PopularRecipes from "components/PopularRecipes/PopularRecipes";
import style from "./Recipe.module.css";
import { Container } from "components/UI";
import RecipeInfo from "components/Recipe/RecipeInfo/RecipeInfo";

const RecipePage = () => {
  const { id } = useParams();
  return (
    <div className={style["recipe-page"]}>
      <Container>
        <PathInfo currentPage="Recipe name" />
        <RecipeInfo />
        <PopularRecipes />{" "}
        {/* Відштохуючись від завдання Oleh-Cheliakh взяли шлях до компонента */}
      </Container>
    </div>
  );
};

export default RecipePage;
