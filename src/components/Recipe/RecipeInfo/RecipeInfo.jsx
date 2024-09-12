import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";

// ingredients photos
import avocado from "../../../assets/img/receip_temporary/avocado.png";
import cucumber from "../../../assets/img/receip_temporary/cucumber.png";
import honey from "../../../assets/img/receip_temporary/honey.png";
import lime from "../../../assets/img/receip_temporary/lime.png";
import mint from "../../../assets/img/receip_temporary/mint.png";
import olive_oil from "../../../assets/img/receip_temporary/olive_oil.png";
import salmon from "../../../assets/img/receip_temporary/salmon.png";
import spinach from "../../../assets/img/receip_temporary/spinach.png";

// Recipe main image
import fish_desktop_1x from "../../../assets/img/receip_temporary/fish_desktop_1x.webp";
import fish_desktop_2x from "../../../assets/img/receip_temporary/fish_desktop_2x.webp";
import fish_tablet_1x from "../../../assets/img/receip_temporary/fish_tablet_1x.webp";
import fish_tablet_2x from "../../../assets/img/receip_temporary/fish_tablet_2x.webp";
import fish_mobile_1x from "../../../assets/img/receip_temporary/fish_mobile_1x.webp";
import fish_mobile_2x from "../../../assets/img/receip_temporary/fish_mobile_2x.webp";

// Author photo
import author_photo_1x from "../../../assets/img/receip_temporary/author_photo_1x.webp";
import author_photo_2x from "../../../assets/img/receip_temporary/author_photo_2x.webp";

const data = {
	title: "Salmon Avocado Salad",
	tags: ["Seafood", "40 min"],
	description:
		"Is a healthy salad recipe that's bigon nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that's big on nutrients and flavor",
	isFavorite: true,
	preparation:
		"Is a healthy salad recipe that's big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that's big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette. Then drizzled with a homemade lemon vinaigrette. Is a healthy salad recipe that's big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.",
	image: {
		desktopStandard: fish_desktop_1x,
		desktopRetina: fish_desktop_2x,
		tabletStandard: fish_tablet_1x,
		tabletRetina: fish_tablet_2x,
		mobileStandard: fish_mobile_1x,
		mobileRetina: fish_mobile_2x,
	},
	author: {
		id: 1,
		name: "Nadia",
		photo: {
			standard: author_photo_1x,
			retina: author_photo_2x,
		},
	},
	ingredients: [
		{ name: "avocado", image: avocado, amount: "3" },
		{ name: "cucumber", image: cucumber, amount: "1" },
		{ name: "honey", image: honey, amount: "2 tbs" },
		{ name: "lime", image: lime, amount: "1" },
		{ name: "mint", image: mint, amount: "4 tbs" },
		{ name: "olive oil", image: olive_oil, amount: "3 tbs" },
		{ name: "salmon", image: salmon, amount: "400 g" },
		{ name: "spinach", image: spinach, amount: "400 g" },
	],
};

function RecipeInfo() {
	return (
		<>
			<RecipeMainInfo
				image={data.image}
				author={data.author}
				title={data.title}
				tags={data.tags}
				description={data.description}
				preparation={data.preparation}
				isFavorite={data.isFavorite}
				ingredients={data.ingredients}
			/>
		</>
	);
}

export default RecipeInfo;
