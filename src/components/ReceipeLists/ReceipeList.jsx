import {
  ListPagination,
  Loader,
  RecipeCard,
  RecipePagination,
} from "../../ui-kit";
// import recipes from './recipes.json';
import styles from "./RecipeList.module.scss";

import { useEffect, useState } from "react";
import { recipeApi } from "../../services/Api";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUser } from "../../redux/auth/authSelectors";
import { getFavorites } from "../../redux/favorites/favoritesSelector";
import {
  addToFavorites,
  getFavoritesList,
  removeFromFavorites,
} from "../../redux/favorites/favoritesOperations";
import { getLoading } from "../../redux/recipes/recipesSelectors";
const RecipeList = ({
  recipes,
  itemsPerPage,
  currentPage,
  onPageChange,
  total,
}) => {
  const recipesFavList = useSelector(getFavorites);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const loading = useSelector(getLoading); // <------Loader
  const userId = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    } else {
      dispatch(getFavoritesList(userId._id));
    }
  }, [dispatch]);

  const handleAddToFavorites = async (id) => {
    try {
      await dispatch(addToFavorites(id)).unwrap();
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const handleRemoveFromFavorites = async (id) => {
    try {
      await dispatch(removeFromFavorites(id)).unwrap();
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  return (
    <div className={styles.recipesListContainer}>
      {loading && (
        <div className={styles.empty}>
          <Loader />
        </div>
      )}
      {recipes && !loading && (
        <ul className={styles.recipesList}>
          {recipes?.map((item, index) => {
            const status = recipesFavList?.some(
              (favItem) => favItem._id === item._id
            );
            return (
              <RecipeCard
                key={item._id + index}
                title={item.title}
                description={item.description}
                owner={item.owner}
                img={item.thumb}
                id={item._id}
                status={status}
                handleAddToFavorites={handleAddToFavorites}
                handleRemoveFromFavorites={handleRemoveFromFavorites}
                recipesFavList={recipesFavList}
              />
            );
          })}
        </ul>
      )}
      {total > 12 && (
        <RecipePagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
          total={total}
        />
      )}
    </div>
  );
};
export default RecipeList;
