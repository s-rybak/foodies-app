import SectionTitle from "components/UI/SectionTitle/SectionTitle";
import Text from "components/UI/Text/Text";

import css from "./RecipePreparation.module.css";
import ButtonOutline from "components/Buttons/ButtonOutline/ButtonOutline";
import { useState } from "react";

function RecipePreparation({ preparation, recipeId }) {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div>
			<SectionTitle className={css.title}>Recipe Preparation</SectionTitle>
			<Text className={css.text}>{preparation}</Text>
			<ButtonOutline className={css.button}>
				{isFavorite ? "Remove from favorites" : "Add to favorites"}
			</ButtonOutline>
		</div>
	);
}

export default RecipePreparation;
