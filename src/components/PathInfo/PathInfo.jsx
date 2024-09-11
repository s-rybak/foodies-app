import React from "react";
import { Link } from "react-router-dom";
import style from "./PathInfo.module.css";

const PathInfo = ({ currentPage }) => {
  return (
    <div className={style["path-info"]}>
      <Link to="/" className={style["home-link"]}>
        Home
      </Link>{" "}
      / <span>{currentPage}</span>
    </div>
  );
};

export default PathInfo;
