import Button from "../shared/Button/Button.jsx";
import IconButton from "../shared/IconButton/IconButton.jsx";
import styles from "./FollowerCard.module.css";
import SmallRecipePhoto from "../SmallRecipePhoto/SmallRecipePhoto.jsx";
import useResponsiveValue  from "../../utilities/hooks/useResponsiveValue.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectId } from "../../redux/auth/authSlice.js";

const FollowerCard = ({ data, tab, handleFollowUser, handleUnfollowUser }) => {
  const recipeCardsVisability = useResponsiveValue(768, false, 3);
  const recipeCardsQuantity = useResponsiveValue(1440, 3, 4);
  const authUserId = useSelector(selectId);

  const btnText = () => {
    if (tab === "followers") {
      return data.isFollowing ? "unfollow" : "follow";
    }

    if (tab === "following") {
      return "unfollow";
    }
  };

  return (
    <li className={styles.cardWrapper}>
      <div className={styles.followerData}>
        <img
          src={
            data.avatarURL ||
            "https://gravatar.com/avatar/000000000000000000000000000000000000000000000000000000?d=mp"
          }
          className={styles.smallProfilePhoto}
          alt="User avatar"
        />

        <div>
          <h5 className={styles.name}> {data.name.split(" ")[0]}</h5>
          <p className={styles.descr}>Own recipes: {data.totalRecipes}</p>
          <Button
            disabled={data._id === authUserId}
            text={btnText()}
            variant="follow_user"
            onClick={() =>
              btnText() === "follow" ? handleFollowUser(data._id) : handleUnfollowUser(data._id)
            }
          />
        </div>
      </div>
      {recipeCardsVisability && (
        <ul className={styles.recipesList}>
          {data?.recipes?.map((recipe, idx) => {
            if (idx < recipeCardsQuantity) {
              return (
                <li key={recipe._id}>
                  <SmallRecipePhoto imgUrl={recipe.thumb} title={recipe.title} />
                </li>
              );
            }
          })}
        </ul>
      )}
      <NavLink to={`/user/${data._id}`} className={styles.link_wrapper}>
        <IconButton
          iconId="icon-arrow-up-right"
          style={styles.iconBtn}
          styleSVG={styles.icon}
        ></IconButton>
      </NavLink>
    </li>
  );
};

export default FollowerCard; 