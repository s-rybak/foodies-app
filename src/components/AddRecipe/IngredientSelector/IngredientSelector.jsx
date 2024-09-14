import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../../shared/Dropdown/Dropdown";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import IconButton from "../../../components/shared/IconButton/IconButton";
import TimeCounter from "../TimeCounter/TimeCounter"

import styles from "./IngredientSelector.module.css";
import stylesInput from "../CustomInput.module.css";

import { selectCategories } from "../../../redux/categories/categoriesSelectors";
import { fetchCategories } from "../../../redux/categories/categoriesOperations";

//import { useFetchIngredients } from "../../../services/ingredientService"



// const categoriesData = fetchCategories();
// console.log(categoriesData);

const IngredientSelector = ({
  register,
  time,
  setTime,
  setValue,
  watch,
  selectedIngredients,
  setSelectedIngredients,
}) => {
  const [isIngredientListVisible, setIsIngredientListVisible] = useState(false);

  const dispatch = useDispatch();
  const categoriesData = useSelector(selectCategories);
  useEffect(() => {
      dispatch(fetchCategories());
  }, [dispatch]);
  
  console.log(categoriesData)
  
  const ingredients = [
    { value: "cabbage", label: "Cabbage" },
    { value: "cucamber", label: "Cucamber" },
    { value: "tomato", label: "Tomato" },
    { value: "corn", label: "Corn" },
    { value: "radish", label: "Radish" },
    { value: "parsley", label: "Parsley" },
  ];
  const categories = [
    { value: "beef", label: "Beef" },
    { value: "breakfast", label: "Breakfast" },
    { value: "desserts", label: "Desserts" },
    { value: "lamb", label: "Lamb" },
    { value: "miscellaneous", label: "Miscellaneous" },
    { value: "pasta", label: "Pasta" },
    { value: "pork", label: "Pork" },
    { value: "seafood", label: "Seafood" },
    { value: "side", label: "Side" },
    { value: "starter", label: "Starter" },
  ];
  const ingredient = watch("ingredient");
  const measure = watch("measure");

  const addIngredient = () => {
    console.log(ingredient);
    console.log(measure);
    if (ingredient && measure) {
      //const selectedIngredient = ingredients.find((item) => item.value === ingredient.value);

      setSelectedIngredients([
        ...selectedIngredients,
        {
          id: ingredient.value,
          measure,
          //imageUrl: selectedIngredient.img,
          label: ingredient.label,
        },
      ]);
      setValue("ingredient", null);
      setValue("measure", "");
      setIsIngredientListVisible(true);
    }
  };

  
  const removeIngredient = (index) => {
    //setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
    // if (selectedIngredients.length <= 1) {
    //   setIsIngredientListVisible(false);
    // }
  };

  //useAutoResizeTextarea(styles.textarea);
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
                  onChange=""
                />
            </div>
        </div>
        <div>
          <TimeCounter time={time} setTime={setTime} />
          {/* TODO: Add errors */}
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
            {/* TODO: Add errors */}
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
                <p>{ingredient.measure}</p>
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
      <Button
        text="Add ingredient"
        type="button"
        onClick={ addIngredient }
        iconId="icon-plus"
        iconStyle={styles.addBtnIcon}
        className={styles.buttonAdd}
      />
    </div>
  );
};

export default IngredientSelector;
