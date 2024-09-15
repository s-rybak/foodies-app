import css from "./LinkOutline.module.css";
import { Link } from "react-router-dom";

function LinkOutline({ className, path, children }) {
	return (
		<Link
			to={path}
			className={`${className} ${css.link}`}>
			{children}
		</Link>
	);
}

export default LinkOutline;
