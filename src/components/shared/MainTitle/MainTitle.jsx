import styles from "./MainTitle.module.css";
import cx from "classnames";

const MainTitle = ({ text, addStyle='' }) => {
  return <h2 className={cx(styles.mainTitle , addStyle)}>{text}</h2>;
};

export default MainTitle;
