import { useSelector } from "react-redux";
import { selectAreas } from "redux/areas/areasSelectors";
import css from "./recipeFilters.module.css";
import { selectIngredients } from "redux/ingredients/ingredientsSelectors";

export const IngredientsFilters = ({ changeHandler }) => {
  const { ingredients } = useSelector(selectIngredients);
  console.log(ingredients);
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

// changeHandler доробити, хто візьме RecipePagination
const RecipeFilters = ({ changeHandler }) => {
  return (
    <div>
      <AreaFilters changeHandler={changeHandler} />
      <IngredientsFilters changeHandler={changeHandler} />
    </div>
  );
};

// <div className={css.container}>
//   <IngredientsFilters />
//   <AreaFilters />
// </div>; ???

export default RecipeFilters;
