import { useState } from "react";
import cx from "classnames";
import IconButton from "../../shared/IconButton/IconButton";
import styles from "./HeaderProfile.module.css";
import HeaderProfileMenu from "./HeaderProfileMenu";
import CustomModal from "../../shared/CustomModal/CustomModal";
import HeaderModal from "../HeaderModal/HeaderModal";
import styleModal from "../HeaderModal/HeaderModal.module.css";

const HeaderProfile = ({ isHome, onClick }) => {
  const [toogleOpen, setToogleOpen] = useState(false);
  const [toogleModal, setToogleModal] = useState(false);
  const avatarURL = '';
  const name = 'test name';

  const handlerOpenProfile = () => {
    setToogleOpen(!toogleOpen);
  };

  const handlerToogleModal = () => {
    setToogleModal(!toogleModal);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.profile} onClick={handlerOpenProfile}>
        <img className={styles.profileImg} src={avatarURL} alt={name} />
        <p className={styles.profileName}>{name}</p>
        <IconButton
          style={cx(styles.btn_arrow, toogleOpen && styles.btn_arrow_open)}
          iconId="icon-chevron-down"
          width="18"
          height="18"
          stroke="#fff"
        />
      </div>
      {toogleOpen && (
        <HeaderProfileMenu onClick={onClick} onClose={handlerOpenProfile}/>
      )}

      <IconButton
        style={styles.btn_menu}
        styleSVG={styles.icon_arrow}
        iconId="icon-mobile-menu"
        width="28"
        height="28"
        stroke={isHome ? "#fff" : "#000"}
        onClick={handlerToogleModal}
      />
      {toogleModal && (
        <CustomModal
          isOpen={toogleModal}
          onClose={handlerToogleModal}
          customeStyles={styleModal.wrap_modal}
          btnStyle={styleModal.btn_close}
          width="28"
          height="28"
          stroke="#fff"
        >
          <HeaderModal handlerToogleModal={handlerToogleModal} />
        </CustomModal>
      )}
    </div>
  );
};

export default HeaderProfile;
