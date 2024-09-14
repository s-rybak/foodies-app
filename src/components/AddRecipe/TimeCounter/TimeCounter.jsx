import IconButton from "../../shared/IconButton/IconButton";
import styles from "./TimeCounter.module.css";

const TimeCounter = ({ time=10, setTime }) => {
  const incrementTime = () => {
    setTime((prevTime) => prevTime + 10);
  };

  const decrementTime = () => {
    setTime((prevTime) => (prevTime > 10 ? prevTime - 10 : 10));
  };

  return (
    <div>
      <label>Cooking Time</label>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <IconButton
          iconId="icon-minus"
          width="16"
          height="16"
          type="button"
          style={styles.iconBtn}
          styleSVG={styles.icon}
          onClick={decrementTime}
        />

        <div>
          <span style={{ margin: "0 12px" }}>{time} min</span>
        </div>

        <IconButton
          iconId="icon-plus"
          type="button"
          width="16"
          height="16"
          style={styles.iconBtn}
          styleSVG={styles.icon}
          onClick={incrementTime}
        />
      </div>
    </div>
  );
};

export default TimeCounter;
