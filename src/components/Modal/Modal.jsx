import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Modal.module.css";
import icons from "../../img/icons/icons.svg";
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
            <svg className={css.closeIcon}>
              <use href={`${icons}#cross`}></use>
            </svg>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};
