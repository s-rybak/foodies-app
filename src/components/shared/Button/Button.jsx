import styles from "./Button.module.css";
import cx from "classnames";
import Icon from "../Icon/Icon";

const Button = ({
  disabled = false,
  text = "Button",
  onClick = () => {},
  variant = "button",
  type = "button",
  className,
  id,
  iconId,
  iconWidth = "20",
  iconHeight = "20",
  stroke = "var(--color-main)",
  iconStyle,
}) => {
  return (
    <button
      type={type}
      className={cx(styles.button, styles[variant], className)}
      onClick={onClick}
      id={id}
      disabled={disabled}
    >
      {text}
      {iconId && (
        <Icon
          iconId={iconId}
          width={iconWidth}
          height={iconHeight}
          stroke={stroke}
          customStyle={iconStyle}
        />
      )}
    </button>
  );
};

export default Button;