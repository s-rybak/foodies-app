import React from "react";
import recipeImg from "../../assets/img/recipes/recipe1.png";
import avatar from "../../assets/img/recipes/avatar1.png";
import icons from "assets/img/icons/icons.svg";
import css from "./RecipeCard.module.css";
import {NavLink} from "react-router-dom";
import api from "../../services/api";

export const RecipeCard = ({recipe, clickToFavorite}) => {

  const handleAddToFavorite = async (id) => {
     try {
       await api.post(`/api/recipes/${id}/favorites`)
       clickToFavorite()
     } catch (e) {
        console.log(e,'asd')
     }
  }

  const handleRemoveFromFavorite = async (id) => {
      try {
        await api.delete(`/api/recipes/${id}/favorites`)
        clickToFavorite()
      } catch (e) {
          console.log(e,'asd')
      }
  }

  return (
    <div className={css.card}>
      <img className={css.image} src={recipe?.thumb || `${process.env.REACT_APP_BASE_URL}${recipeImg}`} alt={recipe.title} />
      <h3 className={css.title}>{recipe.title}</h3>
      <p className={css.text}>{recipe.description}</p>

      <div className={css.info}>
        <div className={css.userInfo}>
          <div className={css.avatarContainer}>
            <img className={css.avatar} src={recipe.user.avatar ? `${process.env.REACT_APP_BASE_URL}${recipe.user.avatar}` : avatar} alt={recipe.user.name} />
          </div>
          <h4 className={css.name}>{recipe.user.name}</h4>
        </div>

        <div className={css.buttons}>

          {
            recipe.isFavorite ? (
              <button className={css.btn} type="button" onClick={() => handleRemoveFromFavorite(recipe.id)}>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-heart`}></use>
                </svg>
              </button>
            ): (
              <button className={css.btn} type="button" onClick={() => handleAddToFavorite(recipe.id)}>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-heart-outline`}></use>
                </svg>
              </button>
            )
          }
          <NavLink to={`recipe/${recipe.id}`} className={css.btn} type="button">
            <svg className={css.icon}>
              <use href={`${icons}#icon-arrow-up-right`}></use>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
