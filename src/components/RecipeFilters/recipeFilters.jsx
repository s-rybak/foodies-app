// recipeFilters.js
import { useDispatch, useSelector } from "react-redux";
import css from "./recipeFilters.module.css";
import { selectIngredients } from "../../redux/ingredients/ingredientsSelectors";
import { selectAreas } from "../../redux/areas/areasSelectors";
import { useEffect } from "react";
import { fetchIngredients } from "../../redux/ingredients/ingredientsOperations";
import { fetchAreas } from "../../redux/areas/areasOperations";

// IngredientsFilters
export const IngredientsFilters = ({ changeHandler }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const { ingredients } = useSelector(selectIngredients);

  return (
    <div className={css["select-wrapper"]}>
      <select
        name="ingredients"
        className={css.select}
        onChange={(e) => changeHandler(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          ingredient
        </option>
        {ingredients.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

// AreaFilters
export const AreaFilters = ({ changeHandler }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  const { areas } = useSelector(selectAreas);

  return (
    <div className={css["select-wrapper"]}>
      <select
        name="areas"
        className={css.select}
        onChange={(e) => changeHandler(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          area
        </option>
        {areas.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

// RecipeFilters
const RecipeFilters = ({ changeHandler }) => {
  const handleSelectChangeIngredient = (selectedId) => {
    changeHandler(selectedId, "ingredients");
  };
  const handleSelectChangeArea = (selectedId) => {
    changeHandler(selectedId, "areas");
  };

  return (
    <div className={css.container}>
      <IngredientsFilters changeHandler={handleSelectChangeIngredient} />
      <AreaFilters changeHandler={handleSelectChangeArea} />
    </div>
  );
};

// Додати експорт за замовчуванням для RecipeFilters
export default RecipeFilters;
