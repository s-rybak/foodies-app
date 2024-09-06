import css from "./HeroTitle.module.css";

function HeroTitle({ children }) {
	return <h1 className={css.title}>{children}</h1>;
}

export default HeroTitle;
