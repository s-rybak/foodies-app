import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Container, SvgIcon } from "components/UI";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <Link to="/" aria-label="Logo Foodies" className={styles.logo}>
            Foodies
          </Link>
          <ul className={styles.list_social}>
            <li className={styles.item_social}>
              <Link
                className={styles.item_social_link}
                to="https://www.facebook.com/goITclub/"
                rel="noreferrer"
                target="_blank"
              >
                <SvgIcon name={"icon-facebook"} />
              </Link>
            </li>
            <li className={styles.item_social}>
              <Link
                className={styles.item_social_link}
                to="https://www.instagram.com/goitclub/"
                rel="noreferrer"
                target="_blank"
              >
                <SvgIcon name={"icon-instagram"} />
              </Link>
            </li>
            <li className={styles.item_social}>
              <Link
                className={styles.item_social_link}
                to="https://www.youtube.com/c/GoIT"
                rel="noreferrer"
                target="_blank"
              >
                <SvgIcon name={"icon-youtube"} />
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <p className={styles.copy}>@2024, Foodies. All rights reserved</p>
    </footer>
  );
};

export default Footer;
