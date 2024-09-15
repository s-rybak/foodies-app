import noImage from "../../assets/img/empty/no-image.png";
import noAvatar from "../../assets/img/empty/no-avatar.jpg";
import icons from "assets/img/icons/icons.svg";
import css from "./RecipeCard.module.css";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectAuthIsSignedIn } from "../../redux/auth/authSelectors";
import RecipeCardFavoriteButton from "./RecipeCardFavoriteButton/RecipeCardFavoriteButton";

export const RecipeCard = ({ recipe, isFavorite }) => {
	const isSignIn = useSelector(selectAuthIsSignedIn);
	return (
		<div className={css.card}>
			<img
				className={css.image}
				src={recipe?.thumb ? `${recipe.thumb.startsWith("http") ? recipe.thumb : process.env.REACT_APP_BASE_URL + recipe.thumb}` : noImage}
				alt={recipe.title}
			/>
			<h3 className={css.title}>{recipe.title}</h3>
			<p className={css.text}>{recipe.description}</p>

			<div className={css.info}>
				<div className={css.userInfo}>
					<div className={css.avatarContainer}>
						<img
							className={css.avatar}
							src={recipe.user.avatar ? `${recipe.user.avatar.startsWith("http") ? recipe.user.avatar : process.env.REACT_APP_BASE_URL+recipe.user.avatar }` : noAvatar}
							alt={recipe.user.name}
						/>
					</div>
					<h4 className={css.name}>{recipe.user.name}</h4>
				</div>

				<div className={css.buttons}>
					{isSignIn ? <RecipeCardFavoriteButton idRecipe={recipe.id} favorite={isFavorite}/> : <></>}

					<NavLink
						to={`recipe/${recipe.id}`}
						className={css.btn}
						type="button">
						<svg className={css.icon}>
							<use href={`${icons}#icon-arrow-up-right`}></use>
						</svg>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
