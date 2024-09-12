import React, { useEffect, useState } from "react";
import css from "./RecipeList.module.css";
import { RecipeCard } from "components/RecipeCard/RecipeCard";
import recipeImg from "../../assets/img/recipes/recipe1.png";
import avatar from "../../assets/img/recipes/avatar1.png";
import { Container } from "components/UI";

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
  const [recipes, setRecipes] = useState([]);

  const loadRecipes = async () => {
    try {
      const res = await fetch(
        "https://foodies-api-hrrk.onrender.com/api/recipes?page=1&limit=10"
      );

      if (!res.ok) {
        console.log("The request returned an error", res.error);
      }

      const data = await res.json();
      console.log(data);

      return data.recipes;
    } catch (error) {
      console.log("The request returned an error", error);
    }
  };

  useEffect(() => {
    loadRecipes().then(setRecipes);
  }, []);

  console.log(recipes, "before render");

  return (
    <Container>
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
{/* 
      {recipes.length > 0 ? (
        <img
          src={`https://foodies-api-hrrk.onrender.com/${recipes[0].thumb}`}
          alt=""
        />
      ) : null} */}
    </Container>
  );
};
