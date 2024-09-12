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
	author,
	title,
	tags,
	description,
	preparation,
	isFavorite,
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
					<RecipeTags tags={tags} />
					<Text>{description}</Text>
					<RecipeAuthor
						authorId={author.id}
						authorPhotoStandard={author.photo.standard}
						authorPhotoRetina={author.photo.retina}
						authorName={author.name}
					/>
				</div>
				<RecipeIngredients ingredients={ingredients} />
				<RecipePreparation
					preparation={preparation}
					isFavorite={isFavorite}
				/>
			</div>
		</Container>
	);
}

export default RecipeMainInfo;
