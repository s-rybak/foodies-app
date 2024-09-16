import Button from '../shared/Button/Button.jsx';
import IconButton from '../shared/IconButton/IconButton.jsx';
import styles from './FollowerCard.module.css';
import SmallRecipePhoto from '../SmallRecipePhoto/SmallRecipePhoto.jsx';
import useResponsiveValue from '../../utilities/hooks/useResponsiveValue.js';
import { NavLink } from 'react-router-dom';


const FollowerCard = ({ data, tab, handleFollowUser, handleUnfollowUser }) => {
  const recipeCardsVisability = useResponsiveValue(768, false, 3);
  const recipeCardsQuantity = useResponsiveValue(1440, 3, 4);
  // const authUserId = useSelector(selectId);

  const btnText = () => {
    if (tab === 'followers') {
      return data.isFollowing ? 'unfollow' : 'follow';
    }

    if (tab === 'following') {
      return 'unfollow';
    }
  };

  return (
    <li className={styles.cardWrapper}>
      <div className={styles.followerData}>
        <img
          src={
            data.avatarURL ||
            'https://gravatar.com/avatar/000000000000000000000000000000000000000000000000000000?d=mp'
          }
          className={styles.smallProfilePhoto}
          alt='User avatar'
        />

        <div>
          <h5 className={styles.name}> {data.name}</h5>
          {/* <h5 className={styles.name}> {data.name.split(" ")[0]}</h5> */}
          <p className={styles.descr}>Own recipes: {data.recipeCount}</p>
          <Button
            disabled={data.id === 1}
            text={btnText()}
            variant='follow_user'
            classname={styles.followBtn}
            onClick={() =>
              btnText() === 'follow'
                ? handleFollowUser(data.id)
                : handleUnfollowUser(data.id)
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
                  <SmallRecipePhoto
                    imgUrl={recipe.thumb}
                    title={recipe.title}
                  />
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
      <NavLink to={`/user/${data.id}`} className={styles.link_wrapper}>
        <IconButton
          iconId='icon-arrow-up-right'
          style={styles.iconBtn}
          styleSVG={styles.icon}
        ></IconButton>
      </NavLink>
    </li>
  );
};

export default FollowerCard;
