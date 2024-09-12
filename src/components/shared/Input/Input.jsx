import styles from "./Input.module.css";
import Icon from "../Icon/Icon.jsx";
import cx from "classnames";

const Input = ({
  register,
  placeholder,
  iconId,
  type,
  togglePasswordVisibility,
  notEmpty,
  width,
  classname,
  name,
  id,
}) => {
  const handleClickEye = () => {
    togglePasswordVisibility();
  };

  if (!iconId)
    return (
      <input
        id={id}
        className={cx(styles.input, classname, `${notEmpty ? styles.notEmpty : ""}`)}
        placeholder={placeholder}
        type={type}
        name={name}
        {...register(name, { required: true })}
      />
    );

  return (
    <div className={styles.container}>
      <input
        id={id}
        className={cx(styles.input, classname, `${notEmpty ? styles.notEmpty : ""}`)}
        placeholder={placeholder}
        type={type}
        name={name}
        {...register(name)}
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
