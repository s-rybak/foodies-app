import cx from "classnames";
import Button from "../Button/Button";

import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

const Auth = ({
  isHomepage = true,
  openSignIn = () => {},
  openSignUp = () => {},
}) => {
  return (
    <>
      <div className={styles.authContainer}>
        <Link to="/auth/sign-in">
          <Button
            text="SIGN IN"
            classname={cx(
              styles.authButton,
              isHomepage ? styles.homeSignIn : styles.allSighIn
            )}
            onClick={openSignIn}
          />
        </Link>
        <Link to="/auth/sign-up">
          <Button
            text="SIGN UP"
            classname={cx(
              styles.authButton,
              isHomepage ? styles.homeSignUp : styles.allSighUp
            )}
            onClick={openSignUp}
          />
        </Link>
      </div>
    </>
  );
};

export default Auth;
