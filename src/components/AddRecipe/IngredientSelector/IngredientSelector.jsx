import { useState } from "react";
import Dropdown from "../../shared/Dropdown/Dropdown";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import IconButton from "../../../components/shared/IconButton/IconButton";
import TimeCounter from "../TimeCounter/TimeCounter"

import styles from "./IngredientSelector.module.css";
import stylesInput from "../CustomInput.module.css";



const IngredientSelector = ({
  register,
  ingredients,
  categories,
  areas,
  time,
  setTime,
  setValue,
  watch,
  selectedIngredients,
  setSelectedIngredients,
  errors,
}) => {
  const [isIngredientListVisible, setIsIngredientListVisible] = useState(false);
  const ingredient = watch("ingredient");
  const measure = watch("measure");

  const addIngredient = () => {
    if (ingredient && measure) {
      setSelectedIngredients([
        ...selectedIngredients,
        {
          id: ingredient.value,
          measure,
          imageUrl: ingredient.img,
          label: ingredient.label,
        },
      ]);
      setValue("ingredient", null);
      setValue("measure", "");
      setIsIngredientListVisible(true);
    }
  };

  
  const removeIngredient = (index) => {
    setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
    if (selectedIngredients.length <= 1) {
      setIsIngredientListVisible(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${stylesInput.form__group} ${stylesInput.field}`}>
        <textarea
          {...register("description")}
          name="description"
          maxLength="200"
          placeholder="Enter the description of the dish"
          id="description"
          className={`${stylesInput.form__field} ${styles.textarea}`}
          required
        />
        <label htmlFor="description" className={stylesInput.form__label}>
          Enter the description of the dish
        </label>
        <span className={styles.symbolCounter}>{watch("description")?.length || 0}/200</span>
      </div>
      {/* TODO: Add errors */}
      <div className={styles.selectors_time_wrapp}>
        <div className={styles.categoryAndTime}>
          {/* TODO: Add loader? */}
            <div>
                <label>Category</label>
                <Dropdown
                  {...register("category")}
                  options={ categories }
                  placeholder="Select a category"
                  onChange={(selectedOption) => setValue("category", selectedOption.value)}
            />
            {errors.category && <p className={styles.errorMsg}>{errors.category.message}</p>}
            </div>
        </div>
        <div>
          <TimeCounter time={time} setTime={setTime} />
          {/* TODO: Add errors */}
        </div>
      </div>
      <div className={styles.area}>
        <div className={styles.area}>
          {/* TODO: Add loader? */}
            <div>
                <label>Area</label>
                <Dropdown
                  {...register("area")}
                  options={ areas }
                  placeholder="Select an area"
                  onChange={(selectedOption) => setValue("area", selectedOption.value)}
            />
            {errors.area && <p className={styles.errorMsg}>{errors.area.message}</p>}
            </div>
        </div>
      </div>
      <div className={styles.ingredientAndQuantity}>
        {/* TODO: Add loader? */}
          <div>
            <label>Ingredient</label>
            <Dropdown
              {...register("ingredient")}
              options={ ingredients }
              placeholder="Add the ingredient"
              className={styles.select}
              onChange={(selectedOption) => setValue("ingredient", selectedOption)}
            />
            {errors.ingredient && <p className={styles.errorMsg}>{errors.ingredient.message}</p>}
          </div>

        <div className={`${stylesInput.form__group} ${stylesInput.field}`}>
          <Input
            register={register}
            type="text"
            name="measure"
            id="measure"
            placeholder="Enter quantity"
            classname={`${styles.inputQuantity} ${stylesInput.form__field}`}
          />
          <label className={stylesInput.form__label} htmlFor="measure">
            Enter quantity
          </label>
          {/* TODO: Add errors */}
        </div>
      </div>
      <Button
        text="Add ingredient"
        type="button"
        onClick={ addIngredient }
        iconId="icon-plus"
        iconStyle={styles.addBtnIcon}
        classname={styles.buttonAdd}
      />
      {isIngredientListVisible && (
        <ul className={styles.list}>
          {selectedIngredients.map((ingredient, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.imageWrapper}>
                <img
                  src={ingredient.imageUrl}
                  alt={ingredient.label}
                  width="55px"
                  height="55px"
                  className={styles.image}
                />
              </div>
              <div className={styles.textWrapper}>
                <p>{ingredient.label}</p>
                <p className={styles.ingredientMeasure}>{ingredient.measure}</p>
              </div>
              <IconButton
                iconId="icon-close-btn"
                type="button"
                onClick={() => removeIngredient(index)}
                style={styles.iconBtn}
              />
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default IngredientSelector;
