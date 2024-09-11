// PopularRecipes.jsx
import React, { useEffect, useState } from "react";
import style from "./PopularRecipes.module.css";

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/recipes/popular")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) =>
        console.error("Error fetching popular recipes:", error)
      );
  }, []);

  return (
    <div className={style["popular-recipes"]}>
      <h2>Popular Recipes</h2>
      <ul className={style["recipes-list"]}>
        {recipes.map((recipe) => (
          <li key={recipe.id} className={style["recipe-item"]}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularRecipes;
