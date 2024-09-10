import css from "./LinkOutline.module.css";
import { Link } from "react-router-dom";

function LinkOutline({ className, children }) {
	return (
		<Link
			to="/recipe"
			className={`${className} ${css.link}`}>
			{children}
		</Link>
	);
}

export default LinkOutline;
