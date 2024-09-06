import Icon from "../../shared/Icon/Icon";
import styles from "./HeaderProfile.module.css";
import cx from "classnames";
import { NavLink } from "react-router-dom";

const HeaderProfileMenu = ({ onClick, onClose }) => {
  const userId = 1;
  return (
    <div className={styles.wrap_profile_modal}>
      <NavLink
        to={`/user/${userId}`}
        className={styles.link}
        onClick={onClose}
      >
        Profile
      </NavLink>
      <button
        type="button"
        className={cx(styles.link, styles.link_logout)}
        onClick={onClick}
      >
        Log out
        <Icon
          iconId="icon-arrow-up-right"
          width="18"
          height="18"
          customStyle={cx(styles.icon_logout)}
          stroke="#fff"
        />
      </button>
    </div>
  );
};

export default HeaderProfileMenu;
