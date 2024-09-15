import FollowerCard from './FollowerCard.jsx';
import styles from './FollowerCard.module.css';

const FollowerCardList = ({ data }) => {
  console.log('data in FollowerCardList', data);

  return (
    <ul className={styles.followerCardList}>
      {data.map(el => (
        <FollowerCard
          key={el.id}
          data={el}
          tab={'followers'}
          handleFollowUser={id => console.log(`Follow user with ID: ${id}`)}
          handleUnfollowUser={id => console.log(`Unfollow user with ID: ${id}`)}
        />
      ))}
    </ul>
  );
};

export default FollowerCardList;
