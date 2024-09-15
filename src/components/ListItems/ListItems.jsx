import React, {useEffect, useState} from 'react';
import RecipePreview from 'components/RecipePreview/RecipePreview';
import styles from './ListItem.module.css';
import FollowerCardList from 'components/FollowerCard/FollowerCardList';
import { useDispatch, useSelector } from 'react-redux';
import {selectMyFavorites, selectUserRecipes} from '../../redux/recipes/recipesSelectors';
import {getFavorites, getUserRecipes} from '../../redux/recipes/recipesOperations';
import {
  selectFollowers,
  selectFollowingUsers,
} from '../../redux/users/userSelectors';
import {
  fetchFollowers,
  fetchFollowing,
} from '../../redux/users/userOperation';
import SubtitleComponent from 'components/Subtitles/SubtitleComponent/SubtitleComponent';
import Pagination from "../Pagination/Pagination";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const ListItems = ({ activeTab, userId }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectUserRecipes);
  const followers = useSelector(selectFollowers) || [];
  const myFavorites = useSelector(selectMyFavorites);
  const followingUsers = useSelector(selectFollowingUsers) || [];
  const location = useLocation();

  const getPageFromUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('page') || 1; // по умолчанию ставим 1, если page не задан
  };
  const [page, setPage] = useState(getPageFromUrl());

  useEffect(() => {
    // Когда URL меняется, обновляем состояние
    const currentPage = getPageFromUrl();
    setPage(currentPage);
  }, [location.search]);

  useEffect(() => {
    if (activeTab === 'my-recipes') {
      dispatch(getUserRecipes({ limit: 2, page: page }))
    } else if (activeTab === 'followers') {
      dispatch(fetchFollowers({userId, limit: 2, page: page }));
    } else if (activeTab === 'following') {
      dispatch(fetchFollowing({userId,  limit: 2, page: page }));
    } else if (activeTab === 'my-favorites') {
      dispatch(getFavorites({ limit: 2, page: page }));
    }
  }, [dispatch, activeTab, userId, page ]);

  return (
    <div className={styles.litsItemWrapper}>
      <ul>
        {activeTab === 'my-recipes' ||
        activeTab === 'recipes' ? (
          recipes.recipes ? (
            <>
              {
                recipes.recipes.map(recipe => (
                  <li key={recipe.id}>
                    <RecipePreview recipe={recipe} />
                  </li>
                ))
              }
              <Pagination total={recipes.total} limit={2}/>
            </>
          ) : (
            <SubtitleComponent>
              Nothing has been added to your recipes list yet. Please browse our
              recipes and add your favorites for easy access in the future.
            </SubtitleComponent>
          )
          ) : activeTab === 'my-favorites' ? (
          myFavorites.favoriteRecipes ? (
            <>
              {
                myFavorites.favoriteRecipes.map(recipe => (
                  <li key={recipe.recipeId}>
                    <RecipePreview recipe={recipe.recipe} />
                  </li>
                ))
              }
              <Pagination total={myFavorites.total} limit={2}/>
            </>
          ) : (
            <SubtitleComponent>
              Nothing has been added to your recipes list yet. Please browse our
              recipes and add your favorites for easy access in the future.
            </SubtitleComponent>
          )
        ) : activeTab === 'followers' ? (
          followers.users ? (
            <>
              <FollowerCardList data={followers.users} />
              <Pagination total={followers.followersCount} limit={2}/></>
          ) : (
            <SubtitleComponent>
              There are currently no followers on your account. Please engage
              our visitors with interesting content and draw their attention to
              your profile.
            </SubtitleComponent>
          )
        ) : activeTab === 'following' ? (
          followingUsers.users ? (
            <>
              <FollowerCardList data={followingUsers.users} />
              <Pagination total={followingUsers.followingCount} limit={2}/>
            </>
          ) : (
            <SubtitleComponent>
              Your account currently has no subscriptions to other users. Learn
              more about our users and select those whose content interests you.
            </SubtitleComponent>
          )
        ) : null}
      </ul>
    </div>
  );
};

export default ListItems;
