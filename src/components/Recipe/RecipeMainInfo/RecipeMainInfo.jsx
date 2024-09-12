import Text from "components/UI/Text/Text";
import RecipeMainInfoImage from "./RecipeMainInfoImage/RecipeMainInfoImage";
import RecipeTags from "./RecipeTags/RecipeTags";
import RecipeTitle from "./RecipeTitle/RecipeTitle";
import RecipeAuthor from "./RecipeAuthor/RecipeAuthor";
import Container from "components/UI/Container/Container";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipePreparation from "../RecipePreparation/RecipePreparation";

import css from "./RecipeMainInfo.module.css";

function RecipeMainInfo({
	image,
	authorId,
	authorPhotoStandard,
	authorPhotoRetina,
	authorName,
	title,
	time,
	category,
	description,
	preparation,
	recipeId,
	ingredients,
}) {
	return (
		<Container className={css.container}>
			<RecipeMainInfoImage
				desktopStandard={image.desktopStandard}
				desktopRetina={image.desktopRetina}
				tabletStandard={image.tabletStandard}
				tabletRetina={image.tabletRetina}
				mobileStandard={image.mobileStandard}
				mobileRetina={image.mobileRetina}
				altText={title}
			/>

			<div className={css.info}>
				<div className={css.content}>
					<RecipeTitle>{title}</RecipeTitle>
					<RecipeTags tags={[category, time]} />
					<Text>{description}</Text>
					<RecipeAuthor
						authorId={authorId}
						authorPhotoStandard={authorPhotoStandard}
						authorPhotoRetina={authorPhotoRetina}
						authorName={authorName}
					/>
				</div>
				<RecipeIngredients ingredients={ingredients} />
				<RecipePreparation
					preparation={preparation}
					recipeId={recipeId}
				/>
			</div>
		</Container>
	);
}

export default RecipeMainInfo;
