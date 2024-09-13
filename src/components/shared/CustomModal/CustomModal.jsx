import Modal from "react-modal";
import styles from "./CustomModal.module.css";
import Icon from "../Icon/Icon";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

export const CustomModal = ({
  isOpen,
  onClose,
  children,
  customeStyles = "",
  btnStyle = "",
  width = "24",
  height = "24",
  stroke = "#000",
}) => {
  const navigate = useNavigate();
  return (
    <Modal
      isOpen={isOpen}
      className={cx(styles.content, customeStyles)}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={() => navigate(-1)}
      bodyOpenClassName={styles.block_scroll}
    >
      <button
        className={cx(styles.button, btnStyle)}
        type="button"
        onClick={() => navigate(-1)}
      >
        <Icon
          iconId={"icon-close-btn"}
          width={width}
          height={height}
          stroke={stroke}
        />
      </button>

      {children}
    </Modal>
  );
};
export default CustomModal;
