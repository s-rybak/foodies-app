import React, { useState } from 'react';
import PathInfo from '../../components/PathInfo/PathInfo';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import SubtitleComponent from 'components/Subtitles/SubtitleComponent/SubtitleComponent';
import Button from 'components/shared/Button/Button';
import styles from './UserPage.module.css';
import UserInfo from 'components/UserInfo/UserInfo';
import TabsList from 'components/TabsList/TabsList';
import ListItems from 'components/ListItems/ListItems';

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
  const [activeTab, setActiveTab] = useState('my-recipes');
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(['123', '123']);

  const handleTabChange = tab => {
    setActiveTab(tab);
    setPageNumber(1);
  };
  return (
    <div className={styles.userPage}>
      <PathInfo currentPage='profile' />
      <MainTitle text='Profile' addStyle={styles.userPageMainTitle} />
      <SubtitleComponent className={styles.userPageSubtitle}>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </SubtitleComponent>
      <UserInfo user={user} />
      <Button text='Log out' classname={styles.userPageButton} />
      {/* <FollowButton /> */}
      <TabsList isOwnProfile={true} onTabChange={handleTabChange} />
      <ListItems activeTab={activeTab} data={data} />
      {/* <ListPagination /> */}
    </div>
  );
};

export default UserPage;
