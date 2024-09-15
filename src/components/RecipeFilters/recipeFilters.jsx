import { useDispatch, useSelector } from "react-redux";

import css from "./recipeFilters.module.css";
import { selectIngredients } from "../../redux/ingredients/ingredientsSelectors";
import { selectAreas } from "../../redux/areas/areasSelectors";
import { useEffect } from "react";
import { fetchIngredients } from "../../redux/ingredients/ingredientsOperations";
import { fetchAreas } from "../../redux/areas/areasOperations";
import Dropdown from "../shared/Dropdown/Dropdown.jsx";

// IngredientsFilters
export const IngredientsFilters = ({ changeHandler }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const ingredients = useSelector(selectIngredients);

  const ingredientOptions = ingredients.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <Dropdown
      options={ingredientOptions}
      placeholder="Ingredients"
      onChange={(selectedOption) => changeHandler(selectedOption.value)}
    />
  );
};

// AreaFilters
export const AreaFilters = ({ changeHandler }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  const areas = useSelector(selectAreas);

  const areaOptions = areas.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <Dropdown
      options={areaOptions}
      placeholder="Area"
      onChange={(selectedOption) => changeHandler(selectedOption.value)}
    />
  );
};

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

export default RecipeFilters;
