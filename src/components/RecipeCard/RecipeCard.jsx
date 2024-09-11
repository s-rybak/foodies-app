import React from "react";

import icons from "assets/img/icons/icons.svg";
import css from "./RecipeCard.module.css";

export const RecipeCard = ({ title, text, imgUrl, user }) => {
  return (
    <li className={css.card}>
      <img className={css.image} src={imgUrl} alt="Recipe " />
      <h3 className={css.title}>{title}</h3>
      <p className={css.text}>{text}</p>

      <div className={css.info}>
        <div className={css.userInfo}>
          <div className={css.avatarContainer}>
            <img className={css.avatar} src={user.imgUrl} alt="User Avatar" />
          </div>
          <h4 className={css.name}>{user.name}</h4>
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
    </li>
  );
};
