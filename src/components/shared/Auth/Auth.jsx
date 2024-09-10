import cx from "classnames";
import Button from "../Button/Button";

import styles from "./Auth.module.css";

const Auth = ({ isHomepage = true }) => {
	return (
		<>
			<div className={styles.authContainer}>
				<Button
					text="SIGN IN"
					classname={cx(
						styles.authButton,
						isHomepage ? styles.homeSignIn : styles.allSighIn,
					)}
				/>
				<Button
					text="SIGN UP"
					classname={cx(
						styles.authButton,
						isHomepage ? styles.homeSignUp : styles.allSighUp,
					)}
				/>
			</div>
		</>
	);
};

export default Auth;
