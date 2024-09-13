import css from "./Text.module.css";

function Text({ className, children }) {
	return <p className={`${className} ${css.text}`}>{children}</p>;
}

export default Text;
