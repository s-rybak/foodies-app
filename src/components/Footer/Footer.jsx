import { NavLink } from "react-router-dom";
import Icon from "../shared/Icon/Icon";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <NavLink className={styles.logo} href="/" aria-label="Logo Foodies">
          <p>Foodies</p>
        </NavLink>
        <ul className={styles.list_social}>
          <li className={styles.item_social}>
            <a href="https://www.facebook.com/goITclub/" target="_blank">
              <Icon iconId="icon-facebook" width="20" height="20" customStyle={styles.icon} />
            </a>
          </li>
          <li className={styles.item_social}>
            <a href="https://www.instagram.com/goitclub/" target="_blank">
              <Icon iconId="icon-instagram" width="20" height="20" customStyle={styles.icon} />
            </a>
          </li>
          <li className={styles.item_social}>
            <a href="https://www.youtube.com/c/GoIT" target="_blank">
              <Icon iconId="icon-youTube" width="20" height="20" customStyle={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>@2024, Foodies. All rights reserved</p>
    </footer>
  );
};

export default Footer;