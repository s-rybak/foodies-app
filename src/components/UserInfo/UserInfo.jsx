import styles from './/UserInfo.module.css';
// import cx from 'classnames';

const UserInfo = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfoContainer}>
        <img
          src={user.photo}
          alt={`${user.name}`}
          className={styles.userPhoto}
        />
        <div className={styles.userDetails}>
          <h2 className={styles.userName}>{user.name}</h2>
          <p className={styles.userEmail}>{user.email}</p>
          <div className={styles.userStats}>
            <p>
              <strong>Recipes:</strong> {user.recipeCount}
            </p>
            <p>
              <strong>Favorites:</strong> {user.favoriteCount}
            </p>
            <p>
              <strong>Followers:</strong> {user.followersCount}
            </p>
            <p>
              <strong>Following:</strong> {user.followingCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
