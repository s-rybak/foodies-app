import { Link } from "react-router-dom";
import styles from "./PathInfo.module.css";

const PathInfo = ({ currentPage }) => {
  return (
    <div className={styles.pathinfo}>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <span className={styles.slash}>/</span>
      <span className={styles.currentPage}>{currentPage}</span>
    </div>
  );
};

export default PathInfo;