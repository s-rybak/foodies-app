import css from "./ButtonOutline.module.css";

function ButtonOutline({ className, onClick, children }) {
	return (
		<button
			onClick={onClick}
			type="button"
			className={`${className} ${css.button}`}>
			{children}
		</button>
	);
}

export default ButtonOutline;
