import cx from "classnames";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Auth from "../shared/Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import CustomModal from "../shared/CustomModal/CustomModal";
import Logout from "../Logout/Logout";

import styles from "./Header.module.css"

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname.split("/")[1] === "category";
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);
  return (
    <header className={cx(styles.header, !isHome && styles.headerAll)}>
      <NavLink className={cx(styles.logo, !isHome && styles.logo_white)} to="/" aria-label="Logo Foodies">
        Foodies
      </NavLink>
      <HeaderNav isHome={isHome} />
       {true ? (
        <HeaderProfile onClick={() => setModalLogoutOpen(true)} isHome={isHome} />
      ) : (
        <Auth isHomepage = {isHome}/>
      )}
      <CustomModal isOpen={modalLogoutOpen} onClose={() => setModalLogoutOpen(false)}>
        <Logout setModalLogoutOpen={setModalLogoutOpen} />
      </CustomModal>
    </header>
    
  )
}
