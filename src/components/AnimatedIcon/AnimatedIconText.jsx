import cx from "classnames";
import styles from "./AnimatedIconText.module.css";

const Success = ({className, title, message}) => {
  return (
    <div className={cx(className, styles["icon-container"], styles.success)}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle className={cx(styles.path, styles.circle)} cx="65.1" cy="65.1" r="62.1"/>
        <polyline
          className={cx(styles.path, styles.check)}
          strokeLinecap="round"
          points="100.2,40.2 51.5,88.8 29.8,67.5 "
        />
      </svg>
      <p className={styles.success}>{title || "Success!"}</p>
      {message && <p className={styles.success}>{message}</p>}
    </div>
  )
}

const Failure = ({className, title, message}) => {
  return (
    <div className={cx(className, styles["icon-container"], styles.error)}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle className={cx(styles.path, styles.circle)} cx="65.1" cy="65.1" r="62.1"/>
        <line
          className={cx(styles.path, styles.line)}
          strokeLinecap="round"
          x1="34.4" y1="37.9" x2="95.8" y2="92.3"
        />
        <line
          className={cx(styles.path, styles.line)}
          strokeLinecap="round"
          x1="95.8" y1="38" x2="34.4" y2="92.2"
        />
      </svg>
      <p className={styles.error}>{title || "Failure!"}</p>
      {message && <p className={styles.error}>{message}</p>}
    </div>
  )
}

export const AnimatedIconText = {
  Success,
  Failure,
};
