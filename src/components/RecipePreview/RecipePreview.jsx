import React from 'react';
import styles from './RecipePreview.module.css';
import { Link } from 'react-router-dom';
import Icon from '../shared/Icon/Icon';
import axios from 'axios';

const deleteRecipe = async id => {
  try {
    await axios.delete(`/api/recipes/${id}`);
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};

const RecipePreview = ({ recipe, onDelete }) => {
  const { id, title, description, imageUrl, thumb } = recipe;

  const handleDelete = async () => {
    try {
      await deleteRecipe(id);
      onDelete(id);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div className={styles.recipeCard}>
      <img
        src={imageUrl || thumb || 'path/to/placeholder_image.jpg'}
        alt={title}
        className={styles.recipeImage}
      />
      <div className={styles.recipeDetails}>
        <h3 className={styles.recipeTitle}>{title}</h3>
        <p className={styles.recipeDescription}>{description}</p>
        <div className={styles.actions}>
          <Link to={`/recipe/${id}`} className={styles.link}>
            <Icon
              iconId={'icon-arrow-up-right'}
              customStyle={styles.icon}
              stroke=''
            />
          </Link>
          <button onClick={handleDelete} className={styles.deleteButton}>
            <Icon
              iconId={'icon-custom-delete'}
              customStyle={styles.deleteIcon}
              stroke='#BFBEBE'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;
