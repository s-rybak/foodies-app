// PopularRecipes.jsx
import React, { useState } from "react";
import style from "./PopularRecipes.module.css";
import { RecipeCard } from "../RecipeCard/RecipeCard";

const PopularRecipes = () => {
  const [recipes] = useState([1, 2, 3, 4]);
  // Покищо прописані тестові дані, далі заміняться

  return (
    <div className={style["popular-recipes"]}>
      <h2 className={style["popular-title"]}>Popular Recipes</h2>
      <ul className={style["recipes-list"]}>
        {recipes.map((recipe) => (
          <li key={recipe.id} className={style["recipe-item"]}>
            {<RecipeCard recipe={recipe} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularRecipes;
