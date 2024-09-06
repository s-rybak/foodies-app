import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Modal.module.css";
import cx from "classnames";

export const Modal = ({ children }) => {
  const { pathname } = useLocation();
  const isOpen = pathname.includes("auth");

  return (
    <div
      className={cx(css.modal, {
        [css.modal_open]: isOpen,
      })}
    >
      <div className={css.background}>
        <div className={css.window}>
          <Link to="/" className={css.close}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#050505"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#050505"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};
