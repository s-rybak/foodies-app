import { useSelector } from "react-redux";
import cx from "classnames";
import { selectAuthIsLoading } from "../../../redux/auth/authSelectors";

import Button from "../Button/Button";
import styles from "./Auth.module.css";
import { Loader } from "components";

const Auth = ({ isHomepage = true, openSignIn = () => {},
  openSignUp = () => { } }) => {
  const isAuthLoading = useSelector(selectAuthIsLoading);
  
  return (
    isAuthLoading
      ? <Loader className={cx(styles["auth-loader"], isHomepage ? styles["loader-light"] : styles["loader-dark"])} />
      : <div className={styles.authContainer}>
          <Button
            text="SIGN IN"
            classname={cx(
              styles.authButton,
              isHomepage ? styles.homeSignIn : styles.allSighIn
            )}
            onClick={openSignIn}
          />
          <Button
            text="SIGN UP"
            classname={cx(
              styles.authButton,
              isHomepage ? styles.homeSignUp : styles.allSighUp
            )}
            onClick={openSignUp}
          />
        </div>
  );
}

export default Auth;
