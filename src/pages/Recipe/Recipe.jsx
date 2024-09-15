import React from "react";
import PathInfo from "components/PathInfo/PathInfo";
import PopularRecipes from "components/PopularRecipes/PopularRecipes";
import style from "./Recipe.module.css";
import { Container } from "components/UI";
import RecipeInfo from "components/Recipe/RecipeInfo/RecipeInfo";

const RecipePage = () => {
	return (
		<div className={style["recipe-page"]}>
			<Container>
				<PathInfo currentPage="Recipe name" />
				<RecipeInfo />
				<PopularRecipes />
			</Container>
		</div>
	);
};

export default RecipePage;
