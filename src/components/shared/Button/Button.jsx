import styles from "./Button.module.css";
import cx from "classnames";

const Button = ({
  disabled = false,
  text = "Button",
  onClick = () => {},
  variant = "button",
  type = "button",
  classname,
  id,
}) => {
  return (
    <button
      type={type}
      className={cx(styles.button, styles[variant], classname)}
      onClick={onClick}
      id={id}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;