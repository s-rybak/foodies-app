import React, { useEffect } from 'react';
import RecipePreview from 'components/RecipePreview/RecipePreview';
import UserCard from 'components/UserCard/UserCard';
import styles from './ListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRecipes } from '../../redux/recipes/recipesSelectors';
import { getUserRecipes } from '../../redux/recipes/recipesOperations';
import { selectFollowers } from '../../redux/users/userSelectors';
import { fetchFollowers } from '../../redux/users/userOperation';

const ListItems = ({ activeTab, userId }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectUserRecipes) || [];
  const followers = useSelector(selectFollowers) || [];

  useEffect(() => {
    dispatch(getUserRecipes({ limit: 10, page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (activeTab === 'followers') {
      dispatch(fetchFollowers(userId));
    }
  }, [dispatch, activeTab, userId]);
  return (
    <div className={styles.litsItemWrapper}>
      <ul>
        {activeTab === 'my-recipes' ||
        activeTab === 'recipes' ||
        activeTab === 'my-favorites'
          ? recipes.map(recipe => (
              <li key={recipe.id}>
                <RecipePreview recipe={recipe} />
              </li>
            ))
          : followers.map(user => (
              <li key={user.id}>
                <UserCard user={user} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ListItems;
