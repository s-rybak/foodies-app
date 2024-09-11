import { useSelector } from "react-redux";
import { selectAreas } from "store/areas/areasSelectors";
import css from "./AreaFilters.module.css";

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
