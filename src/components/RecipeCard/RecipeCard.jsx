import React from "react";
import recipeImg from "../../assets/img/recipes/recipe1.png";
import avatar from "../../assets/img/recipes/avatar1.png";
import icons from "assets/img/icons/icons.svg";
import css from "./RecipeCard.module.css";

const dummyCardInfo = {
  id: 1,
  imgUrl: "",
  title: "Tuna Nicoise",
  text: "Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning.",
  user: {
    id: 1,
    imgUrl: "",
    name: "Nadia",
  },
};
export const RecipeCard = () => {
  return (
    <div className={css.card}>
      <img className={css.image} src={recipeImg} alt="Recipe photo" />
      <h3 className={css.title}>{dummyCardInfo.title}</h3>
      <p className={css.text}>{dummyCardInfo.text}</p>

      <div className={css.info}>
        <div className={css.userInfo}>
          <div className={css.avatarContainer}>
            <img className={css.avatar} src={avatar} alt="User Photo" />
          </div>
          <h4 className={css.name}>{dummyCardInfo.user.name}</h4>
        </div>

        <div className={css.buttons}>
          <button className={css.btn} type="button">
            <svg className={css.icon}>
              <use href={`${icons}#icon-heart-outline`}></use>
            </svg>
          </button>
          <button className={css.btn} type="button">
            <svg className={css.icon}>
              <use href={`${icons}#icon-arrow-up-right`}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
