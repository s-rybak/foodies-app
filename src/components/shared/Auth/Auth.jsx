import cx from "classnames";
import Button from "../Button/Button";

import styles from "./Auth.module.css";

const Auth = ({ isHomepage = true, openSignIn = () => {},
	openSignUp = () => {} }) => {
  return (
    <>
      <div className={styles.authContainer}>
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
    </>
  );
};

export default Auth;
