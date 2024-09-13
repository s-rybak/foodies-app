import cx from "classnames";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from "../shared/Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import CustomModal from "../shared/CustomModal/CustomModal";
import Logout from "../Logout/Logout";
import { selectAuthIsSignedIn } from "../../redux/auth/authSelectors";

import styles from "./Header.module.css";
import SignInForm from "components/SignInForm/SignInForm";

export default function Header() {
  const { pathname } = useLocation();

  const modalSignInOpen = pathname.includes("/auth/sign-in");
  const modalSignUpOpen = pathname.includes("/auth/sign-up");
  // const modalLogoutOpen = pathname.includes("/auth/log-out");

  const isSignedIn = useSelector(selectAuthIsSignedIn);

  /*   const [modalSignInOpen, setModalSignInOpen] = useState(false);
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);*/
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);

  const isHome = pathname === "/" || pathname.split("/")[1] === "category";

  return (
    <header className={cx(styles.header, !isHome && styles.headerAll)}>
      <NavLink
        className={cx(styles.logo, !isHome && styles.logo_white)}
        to="/"
        aria-label="Logo Foodies"
      >
        Foodies
      </NavLink>
      <HeaderNav isHome={isHome} />
      {isSignedIn ? (
        <HeaderProfile
          onClick={() => setModalLogoutOpen(true)}
          isHome={isHome}
        />
      ) : (
        <Auth isHomepage={isHome} />
      )}

      <CustomModal isOpen={modalSignInOpen}>
        <SignInForm />
      </CustomModal>
      <CustomModal isOpen={modalSignUpOpen}>
        <SignInForm />
      </CustomModal>
      <CustomModal
        isOpen={modalLogoutOpen}
        onClose={() => setModalLogoutOpen(false)}
      >
        <Logout setModalLogoutOpen={setModalLogoutOpen} />
      </CustomModal>
    </header>
  );
}
