import css from "./RecipeMainInfoImage.module.css";
import emptyImage from "../../../../assets/img/empty/no-image.png";

function RecipeMainInfoImage({ recipeImage, altText }) {
	return (
		<img
			className={css.image}
			src={recipeImage || emptyImage}
			width={343}
			height={318}
			alt={altText}
		/>
	);
}

export default RecipeMainInfoImage;
