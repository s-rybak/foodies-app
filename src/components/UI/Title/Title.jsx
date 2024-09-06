import style from "./Title.module.css";

export default function Title({ children }) {
  return <h2 className={style.title}>{children}</h2>;
}
