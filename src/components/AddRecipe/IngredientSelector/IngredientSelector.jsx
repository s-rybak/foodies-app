import styles from "./IngredientSelector.module.css";
import Dropdown from "../../shared/Dropdown/Dropdown";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import TimeCounter from "../TimeCounter/TimeCounter";
import stylesInput from "../CustomInput.module.css";

const IngredientSelector = ({
    time,
    setTime,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${stylesInput.form__group} ${stylesInput.field}`}>
        <textarea
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
              <span className={styles.symbolCounter}>
                  {/* TODO:add counter */}
                  0/200</span>
      </div>
      {/* TODO: Add errors */}
      <div className={styles.selectors_time_wrapp}>
        <div className={styles.categoryAndTime}>
          {/* TODO: Add loader? */}
            <div>
                <label>Category</label>
                <Dropdown
                    options=""
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
              options=""
              placeholder="Add the ingredient"
              className={styles.select}
              onChange=""
            />
            {/* TODO: Add errors */}
          </div>

        <div className={`${stylesInput.form__group} ${stylesInput.field}`}>
          <Input
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
        onClick=""
        iconId="icon-plus"
        iconStyle={styles.addBtnIcon}
        classname={styles.buttonAdd}
      />
    </div>
  );
};

export default IngredientSelector;
