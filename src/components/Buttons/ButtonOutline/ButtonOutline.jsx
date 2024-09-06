import css from "./ButtonOutline.module.css";

function ButtonOutline({ children }) {
	return <button className={css.button}>{children}</button>;
}

export default ButtonOutline;
