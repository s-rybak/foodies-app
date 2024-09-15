import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import Button from "../../shared/Button/Button";
import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../../../redux/auth/authSelectors";

const HeaderNav = ({ isHome, notAutorizedClick }) => {
	const isSignedIn = useSelector(selectAuthIsSignedIn);
	return (
		<nav className={styles.navigation}>
			<ul className={cx(!isHome && styles.headerAll)}>
				<li>
					<NavLink to="/">
						<Button
							text="Home"
							classname={cx(
								styles.navigationButton,
								!isHome && styles.navigationButton_inactive,
							)}
						/>
					</NavLink>
				</li>
				<li>
					{isSignedIn ? (
						<NavLink to="/recipe/add">
							<Button
								text="Add recipe"
								classname={cx(
									styles.navigationButton,
									isHome && styles.navigationButton_inactive,
								)}
							/>
						</NavLink>
					) : (
						<Button
							onClick={notAutorizedClick}
							text="Add recipe"
							classname={cx(
								styles.navigationButton,
								isHome && styles.navigationButton_inactive,
							)}
						/>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default HeaderNav;
