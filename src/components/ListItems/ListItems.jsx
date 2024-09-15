import React from 'react';
import RecipePreview from 'components/RecipePreview/RecipePreview';
import styles from './ListItem.module.css';
import FollowerCardList from 'components/FollowerCard/FollowerCardList';

const ListItems = ({ activeTab, data }) => {

  return (
    <div className={styles.litsItemWrapper}>
      <ul>
        {activeTab === 'my-recipes' || activeTab === 'recipes' ||  activeTab === 'my-favorites'
          ? data.map(recipe => (
              <li key={recipe.id}>
                <RecipePreview recipe={recipe} />
              </li>
            ))
          : data.map(user => (
              <li key={user.id}>
                <FollowerCardList user={user} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ListItems;
