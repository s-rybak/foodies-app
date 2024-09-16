import SectionTitle from "components/UI/SectionTitle/SectionTitle";
import Text from "components/UI/Text/Text";

import css from "./RecipePreparation.module.css";
import RecipeFavoriteButton from "../RecipeFavoriteButton/RecipeFavoriteButton";
import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../../../redux/auth/authSelectors";

function RecipePreparation({ instructions, recipeId, isFavorite }) {
	const isSignedIn = useSelector(selectAuthIsSignedIn);
	return (
		<div>
			<SectionTitle className={css.title}>Recipe Preparation</SectionTitle>
			<Text className={css.text}>{instructions}</Text>
			{isSignedIn ? <RecipeFavoriteButton recipeId={recipeId} favorite={isFavorite} /> : <></>}
		</div>
	);
}

export default RecipePreparation;
