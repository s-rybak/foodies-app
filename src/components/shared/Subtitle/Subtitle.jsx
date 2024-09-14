import styles from "./Subtitle.module.css";
const Subtitle = ({ text }) => {
  return (
    <div className={styles.subtitleWrapper}>
      <p className={styles.subtitle}>
        {text}
      </p>
    </div>
  );
};
export default Subtitle;
