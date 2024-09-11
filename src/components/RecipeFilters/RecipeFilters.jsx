import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import SelectFilter from "./SelectFilter/SelectFilter";
import { selectIngredientsOptions } from "store/ingredientsSlice/selectors";
import { selectAreasOptions } from "store/areasSlice/selectors";
import { fetchIngredients } from "store/ingredientsSlice/thunks";
import { fetchAreas } from "store/areasSlice/thunks";
import css from "./RecipeFilter.module.css";

const RecipeFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ingredientsOptions = useSelector(selectIngredientsOptions);
  const areasOptions = useSelector(selectAreasOptions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ingredientsOptions.length) {
      dispatch(fetchIngredients());
    }
  }, [dispatch, ingredientsOptions]);

  useEffect(() => {
    if (!areasOptions.length) {
      dispatch(fetchAreas());
    }
  }, [dispatch, areasOptions]);

  const handleChange = (option, { name }) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("page", 1);

      if (option && Array.isArray(option)) {
        if (option.length > 0) {
          newParams.set(name, option.map((opt) => opt.value).join(","));
        } else {
          newParams.delete(name);
        }
      } else if (option) {
        newParams.set(name, option.value);
      } else {
        newParams.delete(name);
      }

      return newParams;
    });
  };

  const getOptionFromValue = (options, value) => {
    if (!value) return null;
    const valuesArray = value.split(",");
    return options.filter((option) => valuesArray.includes(option.value));
  };

  const selectedIngredient = getOptionFromValue(
    ingredientsOptions,
    searchParams.get("ingredients")
  );
  const selectedArea = getOptionFromValue(
    areasOptions,
    searchParams.get("area")
  );

  return (
    <div className={css.filters_container}>
      <SelectFilter
        name="ingredients"
        options={ingredientsOptions}
        onChange={handleChange}
        value={selectedIngredient}
        placeholder="Ingredient"
        isMulti={true}
      />
      <SelectFilter
        name="area"
        options={areasOptions}
        onChange={handleChange}
        value={selectedArea}
        placeholder="Areas"
      />
    </div>
  );
};

export default RecipeFilters;

/*import { useSelector } from "react-redux";
import { selectAreas } from "store/areas/areasSelectors";
import css from "./RecipeFilters.module.css";

const AreaFilters = () => {
  const { areas } = useSelector(selectAreas);
  console.log("areas", areas);

  return (
    <select name="areas" className={css.select}>
      {areas.result.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default AreaFilters;

*/
