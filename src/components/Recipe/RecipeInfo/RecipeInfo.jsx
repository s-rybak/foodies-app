import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";

import avocado from "../../../assets/img/receip_temporary/avocado.png";
import cucumber from "../../../assets/img/receip_temporary/cucumber.png";
import honey from "../../../assets/img/receip_temporary/honey.png";
import lime from "../../../assets/img/receip_temporary/lime.png";
import mint from "../../../assets/img/receip_temporary/mint.png";
import olive_oil from "../../../assets/img/receip_temporary/olive_oil.png";
import salmon from "../../../assets/img/receip_temporary/salmon.png";
import spinach from "../../../assets/img/receip_temporary/spinach.png";

const data = [
	{ name: "avocado", image: avocado, amount: "3" },
	{ name: "cucumber", image: cucumber, amount: "1" },
	{ name: "honey", image: honey, amount: "2 tbs" },
	{ name: "lime", image: lime, amount: "1" },
	{ name: "mint", image: mint, amount: "4 tbs" },
	{ name: "olive oil", image: olive_oil, amount: "3 tbs" },
	{ name: "salmon", image: salmon, amount: "400 g" },
	{ name: "spinach", image: spinach, amount: "400 g" },
];

function RecipeInfo() {
	return (
		<>
			<RecipeMainInfo ingredients={data} />
		</>
	);
}

export default RecipeInfo;
