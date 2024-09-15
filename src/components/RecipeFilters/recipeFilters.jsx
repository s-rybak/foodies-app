import {useDispatch, useSelector} from "react-redux";

import css from "./recipeFilters.module.css";
import {selectIngredients} from "../../redux/ingredients/ingredientsSelectors";
import {selectAreas} from "../../redux/areas/areasSelectors";
import {useEffect} from "react";
import {fetchIngredients} from "../../redux/ingredients/ingredientsOperations";
import {fetchAreas} from "../../redux/areas/areasOperations";

export const IngredientsFilters = ({ changeHandler }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const { ingredients } = useSelector(selectIngredients);

  return (
    <select
      name="ingredients"
      className={css.select}
      onChange={(e) => changeHandler(e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Please select an ingredient
      </option>
      {ingredients.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export const AreaFilters = ({ changeHandler }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  const { areas } = useSelector(selectAreas);

  return (
    <select
      name="areas"
      className={css.select}
      onChange={(e) => changeHandler(e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Please select an area
      </option>
      {areas.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

const RecipeFilters = ({ changeHandler }) => {

  const handleSelectChangeIngredient = (selectedId) => {
    changeHandler(selectedId, 'ingredients');
  }
  const handleSelectChangeArea = (selectedId) => {
    changeHandler(selectedId, 'areas');
  };


  return (
    <div className={css.container}>
      <IngredientsFilters changeHandler={handleSelectChangeIngredient} />
      <AreaFilters changeHandler={handleSelectChangeArea} />
    </div>
  );
};


export default RecipeFilters;
