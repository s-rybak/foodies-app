import css from "./ButtonOutline.module.css";

function ButtonOutline({ className, children }) {
	return <button className={`${className} ${css.button}`}>{children}</button>;
}

export default ButtonOutline;
