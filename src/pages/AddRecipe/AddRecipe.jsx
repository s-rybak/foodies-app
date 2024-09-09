import { useState } from "react";
import styles from "./AddRecipe.module.css";

import PathInfo from "../../components/PathInfo/PathInfo";

import MainTitle from "../../components/shared/MainTitle/MainTitle";
import Subtitle from "../../components/shared/Subtitle/Subtitle";
import ImageUploader from "../../components/AddRecipe/ImageUploader/ImageUploader";
import Input from "../../components/shared/Input/Input";
import IngredientSelector from "../../components/AddRecipe/IngredientSelector/IngredientSelector";
import IconButton from "../../components/shared/IconButton/IconButton";
import Button from "../../components/shared/Button/Button";
//import FormTitleText from "../../components/AddRecipeForm/FormTiltle/FormTiltleText";
//import { useGetCategoriesQuery } from "../../store/services/categoryService";
//import { useGetIngredientsQuery } from "../../store/services/ingredientService";
//import { useGetAreasQuery } from "../../store/services/areaService";
//import { useCreateRecipeMutation } from "../../store/services/recipeService";

import stylesInput from "../../components/AddRecipe/CustomInput.module.css";

//import { setUserAddedRecipes } from "../../store/features/profileSlice";
//import { selectRecipes } from "../../store/selectors/profileSelectors";

import useAutoResizeTextarea from "../../utilities/hooks/useAutoResizeTextarea";
//import { selectId } from "../../store/features/authSlice";

const AddRecipe = () => {
  const [time, setTime] = useState(10);
  useAutoResizeTextarea(styles.textarea);
  return (
    <div className={styles.container}>
      <div className={styles.titleAndCrumpsWraper}>
        <div className={styles.breaCrumbs}>
          <PathInfo currentPage="Add Recipe" />
        </div>

        <div className={styles.titleWrapper}>
          <MainTitle text="add recipe" />
          <Subtitle />
        </div>
      </div>
      <form onSubmit="" className={styles.form}>
        <div className={styles.formWrapper}>
          <ImageUploader />

          <div>
            <div className={styles.nameInputWrapper}>
              <Input
                type="text"
                name="title"
                placeholder="The name of the recipe"
                classname={styles.nameInput}
              />
              {/* TODO: add errors parser */}
            </div>

            <div className={styles.recipeData}>
              <div className={styles.categoryAndTime}>
                <div className={styles.recipeData}>
                  <IngredientSelector time={time} setTime={setTime} />
                  {/* TODO: add errors parser */}
                </div>
              </div>
            </div>
            <div className={styles.recipeIncstructions}>
              <h2 className={styles.subheadear}>Recipe preparation</h2>
              <div
                className={`${styles.textareaWrapper} ${stylesInput.form__group} ${stylesInput.field}`}
              >
                <textarea
                  onInput=""
                  id="instructions"
                  name="instructions"
                  placeholder="Enter recipe"
                  maxLength="none"
                  className={`${styles.textarea} ${stylesInput.form__field}`}
                />
                <label className={`${styles.labelPrep} ${stylesInput.form__label}`}>
                  Enter recipe
                </label>
                <span className={styles.symbolCounter}>
                  {/* TODO:add counter */}
                  0/200
                </span>
                {/* TODO: add errors parser */}
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <IconButton
                iconId="icon-trash"
                type="button"
                onClick=""
                width="20"
                height="20"
                style={styles.trashBtn}
                styleSVG={styles.iconTrash}
              />

              <Button text="Publish" type="submit" classname={styles.button} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
