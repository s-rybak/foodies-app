import React, { useState } from "react";
import RecipePreview from "../components/RecipePreview/RecipePreview"; // Импорт компонента RecipePreview

const RecipeList = () => {
  // список рецептов (быть заменен на данные из базы)
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Chilli Prawn Linguine",
      description: "Delicious prawn pasta.",
      imageUrl: "https://example.com/prawn.jpg",
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "Spicy and full of flavor.",
      imageUrl: "https://example.com/curry.jpg",
    },
    {
      id: 3,
      title: "Vegetarian Pizza",
      description: "Healthy and tasty.",
      imageUrl: "https://example.com/pizza.jpg",
    },
  ]);

  // Функция для удаления рецепта из списка
  const handleDeleteRecipe = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipePreview
          key={recipe.id}
          recipe={recipe}
          onDelete={handleDeleteRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;
