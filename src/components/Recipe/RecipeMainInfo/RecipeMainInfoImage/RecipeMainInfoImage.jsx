import css from "./RecipeMainInfoImage.module.css";

function RecipeMainInfoImage({
	desktopStandard,
	desktopRetina,
	tabletStandard,
	tabletRetina,
	mobileStandard,
	mobileRetina,
	altText,
}) {
	return (
		<picture className={css.container}>
			{desktopRetina || desktopStandard ? (
				<source
					media="(min-width: 1440px)"
					srcSet={`${desktopStandard} 1x, ${desktopRetina} 2x`}
				/>
			) : (
				""
			)}

			{tabletRetina || tabletStandard ? (
				<source
					media="(min-width: 768px)"
					srcSet={`${tabletStandard} 1x, ${tabletRetina} 2x`}
				/>
			) : (
				""
			)}

			<img
				className={css.image}
				src={mobileStandard || desktopStandard || tabletStandard}
				srcSet={`${mobileStandard || desktopStandard || tabletStandard} 1x, ${
					mobileRetina || desktopRetina || tabletRetina
				} 2x`}
				width={343}
				height={318}
				alt={altText}
			/>
		</picture>
	);
}

export default RecipeMainInfoImage;
