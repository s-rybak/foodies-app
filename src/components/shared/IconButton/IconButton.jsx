import styles from "./IconButton.module.css";
import cx from "classnames";

import Icon from "../Icon/Icon";

const IconButton = ({
  onClick = () => {},
  type = "button",
  style,
  styleSVG,
  iconId,
  width = "16",
  height = "16",
  stroke = "#000",
}) => {
  return (
    <button type={type} className={cx(styles.button, style)} onClick={onClick}>
      <Icon iconId={iconId} width={width} height={height} customStyle={styleSVG} stroke={stroke} />
    </button>
  );
};

export default IconButton;