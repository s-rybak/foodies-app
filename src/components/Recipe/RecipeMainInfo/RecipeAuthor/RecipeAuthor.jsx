import { Link } from "react-router-dom";
import css from "./RecipeAuthor.module.css";
import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../../../../redux/auth/authSelectors";
import SignInForm from "components/SignInForm/SignInForm";
import CustomModal from "components/shared/CustomModal/CustomModal";
import { useState } from "react";

import emptyAvatar from "../../../../assets/img/empty/no-avatar.jpg";

function RecipeAuthor({ user }) {
	const isSignedIn = useSelector(selectAuthIsSignedIn);
	const [modalSignInOpen, setModalSignInOpen] = useState(false);

	const openModal = () => {
		setModalSignInOpen(true);
	};
	return (
		<>
			{isSignedIn ? (
				<Link
					className={css.button}
					to={`/user/${user.id}`}>
					<img
						className={css.photo}
						src={user.img || emptyAvatar}
						alt={user.name}
						width={32}
						height={32}
					/>
					<span className={css.labels}>
						<span className={css.label}>Created by:</span>
						<span className={css.name}>{user.name}</span>
					</span>
				</Link>
			) : (
				<button
					onClick={openModal}
					className={css.button}>
					<img
						className={css.photo}
						src={user.img || emptyAvatar}
						alt={user.name}
						width={32}
						height={32}
					/>
					<span className={css.labels}>
						<span className={css.label}>Created by:</span>
						<span className={css.name}>{user.name}</span>
					</span>
				</button>
			)}
			<CustomModal
				isOpen={modalSignInOpen}
				onClose={() => setModalSignInOpen(false)}>
				<SignInForm variant="sign-in" />
			</CustomModal>
		</>
	);
}

export default RecipeAuthor;
