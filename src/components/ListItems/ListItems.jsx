import React, { useEffect } from 'react';
import RecipePreview from 'components/RecipePreview/RecipePreview';
import styles from './ListItem.module.css';
import FollowerCardList from 'components/FollowerCard/FollowerCardList';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRecipes } from '../../redux/recipes/recipesSelectors';
import { getUserRecipes } from '../../redux/recipes/recipesOperations';
import {
  selectFollowers,
  selectFollowingUsers,
} from '../../redux/users/userSelectors';
import {
  fetchFollowers,
  fetchFollowing,
} from '../../redux/users/userOperation';
import SubtitleComponent from 'components/Subtitles/SubtitleComponent/SubtitleComponent';

const ListItems = ({ activeTab, userId }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectUserRecipes) || [];
  const followers = useSelector(selectFollowers) || [];
  const followingUsers = useSelector(selectFollowingUsers) || [];

  useEffect(() => {
    dispatch(getUserRecipes({ limit: 10, page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (activeTab === 'followers') {
      dispatch(fetchFollowers(userId));
    } else if (activeTab === 'following') {
      dispatch(fetchFollowing(userId));
    }
  }, [dispatch, activeTab, userId]);

  return (
    <div className={styles.litsItemWrapper}>
      <ul>
        {activeTab === 'my-recipes' ||
        activeTab === 'recipes' ||
        activeTab === 'my-favorites' ? (
          recipes.length > 0 ? (
            recipes.map(recipe => (
              <li key={recipe.id}>
                <RecipePreview recipe={recipe} />
              </li>
            ))
          ) : (
            <SubtitleComponent>
              Nothing has been added to your recipes list yet. Please browse our
              recipes and add your favorites for easy access in the future.
            </SubtitleComponent>
          )
        ) : activeTab === 'followers' ? (
          followers.length > 0 ? (
            followers.map(user => (
              <li key={user.id}>
                <FollowerCardList user={user} />
              </li>
            ))
          ) : (
            <SubtitleComponent>
              There are currently no followers on your account. Please engage
              our visitors with interesting content and draw their attention to
              your profile.
            </SubtitleComponent>
          )
        ) : activeTab === 'following' ? (
          followingUsers.length > 0 ? (
            followingUsers.map(user => (
              <li key={user.id}>
                <FollowerCardList user={user} />
              </li>
            ))
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
