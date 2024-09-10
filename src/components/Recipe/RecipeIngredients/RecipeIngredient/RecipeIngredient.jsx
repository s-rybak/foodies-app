import RecipeIngredientImage from "../RecipeIngredientImage/RecipeIngredientImage";
import RecipeIngredientSubtitle from "../RecipeIngredientSubtitle/RecipeIngredientSubtitle";
import RecipeIngredientTitle from "../RecipeIngredientTitle/RecipeIngredientTitle";

import css from "./RecipeIngredient.module.css";

function RecipeIngredient({ image, name, amount }) {
	return (
		<div className={css.container}>
			<RecipeIngredientImage
				standardImage={image}
				altText={name}
			/>
			<div className={css.text}>
				<RecipeIngredientTitle>{name}</RecipeIngredientTitle>
				<RecipeIngredientSubtitle>{amount}</RecipeIngredientSubtitle>
			</div>
		</div>
	);
}

export default RecipeIngredient;
