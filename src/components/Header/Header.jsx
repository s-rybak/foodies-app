import cx from "classnames";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Auth from "../shared/Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import CustomModal from "../shared/CustomModal/CustomModal";
import Logout from "../Logout/Logout";

import styles from "./Header.module.css";
import SignInForm from "components/SignInForm/SignInForm";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname.split("/")[1] === "category";
  const [modalSignInOpen, setModalSignInOpen] = useState(false);
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);

  const toggleModal = () => {
    setModalSignUpOpen((prev) => !prev);
    setModalSignInOpen((prev) => !prev);
  };

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
      {false ? (
        <HeaderProfile
          onClick={() => setModalLogoutOpen(true)}
          isHome={isHome}
        />
      ) : (
        <Auth
          isHomepage={isHome}
          openSignIn={() => setModalSignInOpen(true)}
          openSignUp={() => setModalSignUpOpen(true)}
        />
      )}

      <CustomModal
        isOpen={modalSignInOpen}
        onClose={() => setModalSignInOpen(false)}
      >
        <SignInForm variant="sign-in"  toggleModal={toggleModal}/>
      </CustomModal>
      <CustomModal
        isOpen={modalSignUpOpen}
        onClose={() => setModalSignUpOpen(false)}
      >
        <SignInForm variant="sign-up" toggleModal={toggleModal} />
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
