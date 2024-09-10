import style from "./UnderTitle.module.css";

export default function UnderTitle({ children, maxWidth = 530 }) {
  return (
    <p className={style.undertitle} style={{ maxWidth: `${maxWidth}px` }}>
      {children}
    </p>
  );
}
