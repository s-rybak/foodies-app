import { useState } from "react";
import { Modal } from "./Modal";
import { SignInForm } from "./SignInForm";
import { Link, useLocation } from "react-router-dom";

export const App = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Link to={`${pathname}auth/sign-in`} onClick={() => setIsOpen(true)}>
        Sign In
      </Link>
      <Link to={`${pathname}auth/sign-up`} onClick={() => setIsOpen(true)}>
        Sign Up
      </Link>
      <Modal isOpen={isOpen} onClose={setIsOpen}>
        <SignInForm />
      </Modal>
    </div>
  );
};
