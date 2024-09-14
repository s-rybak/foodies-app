import style from "./Container.module.css";

const Container = ({ className = "", children }) => {
  return <div className={`${className} ${style.container}`}>{children}</div>;
};

export default Container;
