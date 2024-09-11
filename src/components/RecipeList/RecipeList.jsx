import React from "react";
import css from "./RecipeList.module.css";
import { RecipeCard } from "components/RecipeCard/RecipeCard";
import recipeImg from "../../assets/img/recipes/recipe1.png";
import avatar from "../../assets/img/recipes/avatar1.png";

const dummyListInfo = [
  {
    id: 1,
    imgUrl: recipeImg,
    title: "Tuna Nicoise",
    text: "Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning.",
    user: {
      id: 1,
      imgUrl: avatar,
      name: "Nadia",
    },
  },
  {
    id: 2,
    imgUrl: recipeImg,
    title: "Tuna Nicoise",
    text: "Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning.",
    user: {
      id: 1,
      imgUrl: avatar,
      name: "Nadia",
    },
  },
  {
    id: 3,
    imgUrl: recipeImg,
    title: "Tuna Nicoise",
    text: "Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning.",
    user: {
      id: 1,
      imgUrl: avatar,
      name: "Nadia",
    },
  },
  {
    id: 4,
    imgUrl: recipeImg,
    title: "Tuna Nicoise",
    text: "Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning.",
    user: {
      id: 1,
      imgUrl: avatar,
      name: "Nadia",
    },
  },
];
export const RecipeList = () => {
  return (
    <ul className={css.list}>
      {dummyListInfo.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          text={recipe.text}
          imgUrl={recipe.imgUrl}
          user={recipe.user}
        />
      ))}
    </ul>
  );
};
