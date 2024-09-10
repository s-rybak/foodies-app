import Text from "components/UI/Text/Text";
import RecipeMainInfoImage from "./RecipeMainInfoImage/RecipeMainInfoImage";
import RecipeTags from "./RecipeTags/RecipeTags";
import RecipeTitle from "./RecipeTitle/RecipeTitle";
import RecipeAuthor from "./RecipeAuthor/RecipeAuthor";

import fish_desktop_1x from "../../../assets/img/receip_temporary/fish_desktop_1x.webp";
import fish_desktop_2x from "../../../assets/img/receip_temporary/fish_desktop_2x.webp";
import fish_tablet_1x from "../../../assets/img/receip_temporary/fish_tablet_1x.webp";
import fish_tablet_2x from "../../../assets/img/receip_temporary/fish_tablet_2x.webp";
import fish_mobile_1x from "../../../assets/img/receip_temporary/fish_mobile_1x.webp";
import fish_mobile_2x from "../../../assets/img/receip_temporary/fish_mobile_2x.webp";
import author_photo_1x from "../../../assets/img/receip_temporary/author_photo_1x.webp";
import author_photo_2x from "../../../assets/img/receip_temporary/author_photo_2x.webp";
import Container from "components/UI/Container/Container";

import css from "./RecipeMainInfo.module.css";

function RecipeMainInfo() {
	return (
		<Container className={css.container}>
			<RecipeMainInfoImage
				desktopStandard={fish_desktop_1x}
				desktopRetina={fish_desktop_2x}
				tabletStandard={fish_tablet_1x}
				tabletRetina={fish_tablet_2x}
				mobileStandard={fish_mobile_1x}
				mobileRetina={fish_mobile_2x}
				altText="Fish"
			/>

			<div className={css.content}>
				<RecipeTitle>Salmon Avocado Salad</RecipeTitle>
				<RecipeTags tags={["Seafood", "40 min"]} />
				<Text>
					Is a healthy salad recipe that's bigon nutrients and flavor. A moist,
					pan seared salmon is layered on top of spinach, avocado, tomatoes, and
					red onions. Then drizzled with a homemade lemon vinaigrette. Is a
					healthy salad recipe that's big on nutrients and flavor.
				</Text>
				<RecipeAuthor
					authorPhotoStandard={author_photo_1x}
					authorPhotoRetina={author_photo_2x}
					authorName="Nadia"
				/>
			</div>
		</Container>
	);
}

export default RecipeMainInfo;
