import css from "./SectionTitle.module.css";

function SectionTitle({ className, children }) {
	return <h3 className={`${className} ${css.title}`}>{children}</h3>;
}

export default SectionTitle;
