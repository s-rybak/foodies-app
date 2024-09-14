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
  thumb,
  title,
  time,
  category,
  description,
  user,
  ingredients,
  instructions,
  recipeId,
}) {
  return (
    <Container className={css.container}>
      <RecipeMainInfoImage recipeImage={thumb} altText={title} />

      <div className={css.info}>
        <div className={css.content}>
          <RecipeTitle>{title}</RecipeTitle>
          <RecipeTags category={category} time={time} />
          <Text>{description}</Text>
          <RecipeAuthor user={user} />
        </div>
        <RecipeIngredients ingredients={ingredients} />
        <RecipePreparation instructions={instructions} recipeId={recipeId} />
      </div>
    </Container>
  );
}

export default RecipeMainInfo;
