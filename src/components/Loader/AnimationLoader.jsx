import React from "react";
import style from "./AnimationLoader.module.css";

const AnimationLoader = ({ className }) => (
    <div className={`${className} ${style.loader}`}></div>
);
export default AnimationLoader;
