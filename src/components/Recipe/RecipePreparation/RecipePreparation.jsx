import SectionTitle from "components/UI/SectionTitle/SectionTitle";
import Text from "components/UI/Text/Text";

import css from "./RecipePreparation.module.css";
import RecipeFavoriteButton from "../RecipeFavoriteButton/RecipeFavoriteButton";

function RecipePreparation({ instructions, recipeId }) {
	return (
		<div>
			<SectionTitle className={css.title}>Recipe Preparation</SectionTitle>
			<Text className={css.text}>{instructions}</Text>
			<RecipeFavoriteButton recipeId={recipeId} />
		</div>
	);
}

export default RecipePreparation;
