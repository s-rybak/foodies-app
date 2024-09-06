import css from "./SubtitleComponent.module.css";

function SubtitleComponent({ className, children }) {
	return <p className={`${className} ${css.subtitle}`}>{children}</p>;
}

export default SubtitleComponent;
