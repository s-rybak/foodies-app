import styles from "./Input.module.css";
import Icon from "../Icon/Icon.jsx";
import cx from "classnames";

const Input = ({
  placeholder,
  iconId,
  type,
  togglePasswordVisibility,
  notEmpty,
  width,
  classname,
}) => {
  const handleClickEye = () => {
    togglePasswordVisibility();
  };

  if (!iconId)
    return (
      <input
        className={cx(styles.input, classname, `${notEmpty ? styles.notEmpty : ""}`)}
        placeholder={placeholder}
        type={type}
      />
    );

  return (
    <div className={styles.container}>
      <input
        className={cx(styles.input, classname, `${notEmpty ? styles.notEmpty : ""}`)}
        placeholder={placeholder}
        type={type}
      />
      {iconId && (
        <button className={styles.btn} onClick={handleClickEye} type="button">
          <Icon iconId={iconId} width={width} height={width} />
        </button>
      )}
    </div>
  );
};
export default Input;
