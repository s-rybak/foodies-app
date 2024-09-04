import cx from "classnames";
import { NavLink, useLocation } from "react-router-dom";


import Auth from "../shared/Auth/Auth";
import Button from "../shared/Button/Button";

import styles from "./Header.module.css"

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname.split("/")[1] === "category";
  return (
    <header className={cx(styles.header, !isHome && styles.headerAll)}>
      <NavLink className={cx(styles.logo, !isHome && styles.logo_white)} to="/" aria-label="Logo Foodies">
        <p>Foodies</p>
      </NavLink>
      <ul>
        <NavLink>
            <Button
              text="Home"
              classname={cx(styles.navigationButton, !isHome && styles.navigationButton_inactive)}
            />
        </NavLink>
        <NavLink>
            <Button
              text="Add recipe"
              classname={cx(styles.navigationButton, isHome && styles.navigationButton_inactive)}
          />
          
        </NavLink>
      </ul>
      <Auth isHomepage = {isHome}/>
    </header>
  )
}
