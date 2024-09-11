import css from "./Text.module.css";

function Text({ children }) {
	return <p className={css.text}>{children}</p>;
}

export default Text;
