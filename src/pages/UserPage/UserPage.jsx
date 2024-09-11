import React from 'react';
import PathInfo from '../../components/PathInfo/PathInfo';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import SubtitleComponent from 'components/Subtitles/SubtitleComponent/SubtitleComponent';
import Button from 'components/shared/Button/Button';
import styles from './UserPage.module.css';
import UserInfo from 'components/UserInfo/UserInfo';



const user = {
    photo: 'https://example.com/photo.jpg',
    name: 'John Doe',
    email: 'john.doe@example.com',
    recipeCount: 12,
    favoriteCount: 34,
    followersCount: 56,
    followingCount: 78,
  };
const UserPage = () => {
  return (
    <div className='user-page'>
      <PathInfo currentPage='profile' />
      <MainTitle text='Profile' addStyle={styles.profileMainTitle} />
      <SubtitleComponent>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </SubtitleComponent>
      <UserInfo user={user} />
      <Button text='Log out' classname={styles.profileButton} />
      {/* <FollowButton />
      <TabsList />
      <ListItems />
      <ListPagination /> */}
    </div>
  );
};

export default UserPage;
