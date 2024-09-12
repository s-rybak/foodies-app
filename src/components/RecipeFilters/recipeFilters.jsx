import { useSelector } from "react-redux";
import { selectAreas } from "store/areas/areasSelectors";
import css from "./recipeFilters.module.css";
import { selectIngredients } from "store/ingredients/ingredientsSelectors";

export const AreaFilters = ({ changeHandler }) => {
  const { areas } = useSelector(selectAreas);

  return (
    <select name="areas" className={css.select} onChange={changeHandler}>
      {areas.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export const IngredientsFilters = ({ changeHandler }) => {
  const { ingredients } = useSelector(selectIngredients);

  return (
    <select name="ingredients" className={css.select} onChange={changeHandler}>
      {ingredients.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

// changeHandler доробити, хто візьме RecipePagination
const RecipeFilters = ({ changeHandler }) => {
  return (
    <div>
      <AreaFilters changeHandler={changeHandler} />
      <IngredientsFilters changeHandler={changeHandler} />
    </div>
  );
};

export default RecipeFilters;
