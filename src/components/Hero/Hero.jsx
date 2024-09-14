import HeroTitle from "components/Hero/HeroTitle/HeroTitle";
import SubtitleComponent from "components/Subtitles/SubtitleComponent/SubtitleComponent";
import ButtonOutline from "components/Buttons/ButtonOutline/ButtonOutline";
import HeroImages from "./HeroImages/HeroImages";
import LinkOutline from "components/Links/LinkOutline/LinkOutline";

import css from "./Hero.module.css";
import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../../redux/auth/authSelectors";
import CustomModal from "components/shared/CustomModal/CustomModal";
import { useState } from "react";
import SignInForm from "components/SignInForm/SignInForm";

function Hero() {
	const isSignedIn = useSelector(selectAuthIsSignedIn);

	const [modalSignInOpen, setModalSignInOpen] = useState(false);

	const openModal = () => {
		setModalSignInOpen(true);
	};

	return (
		<div className={css.component}>
			<HeroTitle>Improve Your Culinary Talents</HeroTitle>
			<SubtitleComponent className={css.subtitle}>
				Amazing recipes for beginners in the world of cooking, enveloping you in
				the aromas and tastes of various cuisines.
			</SubtitleComponent>
			{isSignedIn ? (
				<LinkOutline
					path="/recipe/add"
					className={css.button}>
					Add recipe
				</LinkOutline>
			) : (
				<ButtonOutline
					onClick={openModal}
					className={css.button}>
					Add recipe
				</ButtonOutline>
			)}
			<HeroImages />
			<CustomModal
				isOpen={modalSignInOpen}
				onClose={() => setModalSignInOpen(false)}>
				<SignInForm variant="sign-in" />
			</CustomModal>
		</div>
	);
}

export default Hero;
