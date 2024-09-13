import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import styles from "./Header.module.css";

import {
  selectModalLogoutOpen,
  selectModalSignInOpen,
  selectModalSignUpOpen
} from "../../redux/modals/modalSelectors";
import {
  setModalLogoutOpen,
  setModalSignInOpen,
  setModalSignUpOpen
} from "../../redux/modals/modalSlice";
import Auth from "../shared/Auth/Auth";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import CustomModal from "../shared/CustomModal/CustomModal";
import Logout from "../Logout/Logout";
import { selectAuthIsSignedIn } from "../../redux/auth/authSelectors";
import SignInForm from "components/SignInForm/SignInForm";

export default function Header() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  const isModalSignedInOpen = useSelector(selectModalSignInOpen)
  const isModalSignedUpOpen = useSelector(selectModalSignUpOpen)
  const isModalLogoutOpen = useSelector(selectModalLogoutOpen)
  
  const { pathname } = useLocation();

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
          // onClick={() => dispatch(setModalLogoutOpen(true))}
          isHome={isHome}
        />
      ) : (
        <Auth
          isHomepage={isHome}
          openSignIn={() => dispatch(setModalSignInOpen(true))}
          openSignUp={() => dispatch(setModalSignUpOpen(true))}
        />
      )}

      <CustomModal
        isOpen={isModalSignedInOpen}
        onClose={() => dispatch(setModalSignInOpen(false))}
      >
        <SignInForm variant="sign-in" />
      </CustomModal>
      <CustomModal
        isOpen={isModalSignedUpOpen}
        onClose={() => dispatch(setModalSignUpOpen(false))}
      >
        <SignInForm variant="sign-up" />
      </CustomModal>
      <CustomModal
        isOpen={isModalLogoutOpen}
        onClose={() => dispatch(setModalLogoutOpen(false))}
      >
        <Logout setModalLogoutOpen={setModalLogoutOpen} />
      </CustomModal>
    </header>
  );
}
