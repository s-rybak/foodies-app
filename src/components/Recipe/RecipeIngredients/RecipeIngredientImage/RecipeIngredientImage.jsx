import css from "./RecipeIngredientImage.module.css";

function RecipeIngredientImage({ standardImage, retinaImage, altText }) {
	return (
		<picture className={css.container}>
			<img
				className={css.image}
				src={standardImage || retinaImage}
				srcSet={`${standardImage} 1x, ${retinaImage || standardImage} 2x`}
				width={55}
				height={55}
				loading="lazy"
				alt={altText}
			/>
		</picture>
	);
}

export default RecipeIngredientImage;
