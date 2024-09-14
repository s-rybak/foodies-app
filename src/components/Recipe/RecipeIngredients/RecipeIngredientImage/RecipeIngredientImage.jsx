import css from "./RecipeIngredientImage.module.css";

function RecipeIngredientImage({ image, altText }) {
	return (
		<picture className={css.container}>
			<img
				className={css.image}
				src={image}
				width={55}
				height={55}
				loading="lazy"
				alt={altText}
			/>
		</picture>
	);
}

export default RecipeIngredientImage;
