import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from './HeaderNav.module.css'
import Button from '../../shared/Button/Button';

const HeaderNav = ({isHome}) => {
  return (
    <nav className={styles.navigation}>
      <ul className={cx(!isHome && styles.headerAll)}>
        <li>
          <NavLink to="/">
            <Button
              text="Home"
              classname={cx(styles.navigationButton, !isHome && styles.navigationButton_inactive)}
            />
        </NavLink>
        </li>
        <li>
          <NavLink>
            <Button
              text="Add recipe"
              classname={cx(styles.navigationButton, isHome && styles.navigationButton_inactive)}
          />
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;