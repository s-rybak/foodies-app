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

import stylesInput from "../../components/AddRecipe/CustomInput.module.css";

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
          <Subtitle text ="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
        </div>
      </div>
      <form onSubmit={ onSubmit } className={styles.form}>
        <div className={styles.formWrapper}>
          <ImageUploader register={register} />

          <div>
            <div className={styles.nameInputWrapper}>
              <Input
                register={register}
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
                  <IngredientSelector
                    register={register}
                    time={time}
                    setTime={setTime}
                    setValue={setValue}
                    selectedIngredients={selectedIngredients}
                    setSelectedIngredients={setSelectedIngredients}
                    watch={watch}
                  />
                  {/* TODO: add errors parser */}
                </div>
              </div>
            </div>
            <div className={styles.recipeIncstructions}>
              <h2 className={styles.subheadear}>Recipe preparation</h2>
              <div className={`${styles.textareaWrapper} ${stylesInput.form__group} ${stylesInput.field}`}>
                <textarea
                  onInput={handleWordCount}
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
                  {wordCount}/{maxWords}
                </span>
                {/* TODO: add errors parser */}
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <IconButton
                iconId="icon-trash"
                type="button"
                onClick={handleReset}
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