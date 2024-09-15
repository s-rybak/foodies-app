import styles from "./SmallRecipePhoto.module.css";
import recipe_without_img from "../../assets/img/recipe_img/recipe_without_img.jpg";

const SmallRecipePhoto = ({ imgUrl, title }) => {
  return (
    <div className={styles.recipeCard}>
      <img
        className={styles.recipeImg}
        src={imgUrl !== "[object FileList]" ? imgUrl : recipe_without_img}
        alt={title}
      />
    </div>
  );
};

export default SmallRecipePhoto;