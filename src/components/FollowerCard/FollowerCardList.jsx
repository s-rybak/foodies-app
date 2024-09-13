import FollowerCard from "./FollowerCard.jsx";
import styles from "./FollowerCard.module.css";

const FollowerCardList = ({ data, tab, handleFollowUser, handleUnfollowUser }) => {
  return (
    <ul className={styles.followerCardList}>
      {data.map((el) => (
        <FollowerCard
          key={el._id}
          data={el}
          tab={tab}
          handleFollowUser={handleFollowUser}
          handleUnfollowUser={handleUnfollowUser}
        />
      ))}
    </ul>
  );
};

export default FollowerCardList;