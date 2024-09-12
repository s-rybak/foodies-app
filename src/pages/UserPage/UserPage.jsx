import React, { useState } from 'react';
import PathInfo from '../../components/PathInfo/PathInfo';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import SubtitleComponent from 'components/Subtitles/SubtitleComponent/SubtitleComponent';
import Button from 'components/shared/Button/Button';
import styles from './UserPage.module.css';
import UserInfo from 'components/UserInfo/UserInfo';
import TabsList from 'components/TabsList/TabsList';
import ListItems from 'components/ListItems/ListItems';
import ListPagination from 'components/ListPagination/ListPagination';
import { Modal } from 'components/Modal';
import Logout from 'components/Logout/Logout';
import { useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();
  console.log('pathname', pathname);

  const [activeTab, setActiveTab] = useState('my-recipes');
  const [pageNumber, setPageNumber] = useState(1);

  const [data, setData] = useState([
    { id: '1', name: 'Recipe 1' },
    { id: '2', name: 'Recipe 2' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('you click on log out button');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTabChange = tab => {
    setActiveTab(tab);
    setPageNumber(1);
  };
  return (
    <section className={styles.userPageWrapper}>
      <PathInfo currentPage='profile' />
      <MainTitle text='Profile' addStyle={styles.userPageMainTitle} />
      <SubtitleComponent className={styles.userPageSubtitle}>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </SubtitleComponent>
      <div className={styles.userWrapper}>
        <div className={styles.userInfoWrapper}>
          <UserInfo user={user} />
          <Button
            text='Log out'
            classname={styles.userPageButton}
            onClick={handleOpenModal}
          />
        </div>
        {/* <FollowButton /> */}
        <div className={styles.tabsWrapper}>
          <TabsList isOwnProfile={true} onTabChange={handleTabChange} />
          <ListItems activeTab={activeTab} data={data} />
          <ListPagination />
        </div>
      </div>

      {isModalOpen && (
        <Modal>
          <Logout setModalLogoutOpen={handleCloseModal} />
        </Modal>
      )}
    </section>
  );
};

export default UserPage;
