import HeroTitle from "components/Hero/HeroTitle/HeroTitle";
import SubtitleComponent from "components/Subtitles/SubtitleComponent/SubtitleComponent";
import ButtonOutline from "components/Buttons/ButtonOutline/ButtonOutline";
import HeroImages from "./HeroImages/HeroImages";
import LinkOutline from "components/Links/LinkOutline/LinkOutline";

import css from "./Hero.module.css";

function Hero() {
	return (
		<div className={css.component}>
			<HeroTitle>Improve Your Culinary Talents</HeroTitle>
			<SubtitleComponent className={css.subtitle}>
				Amazing recipes for beginners in the world of cooking, enveloping you in
				the aromas and tastes of various cuisines.
			</SubtitleComponent>
			{false ? (
				<ButtonOutline className={css.button}>Add recipe</ButtonOutline>
			) : (
				<LinkOutline className={css.button}>Add recipe</LinkOutline>
			)}
			<HeroImages />
		</div>
	);
}

export default Hero;
