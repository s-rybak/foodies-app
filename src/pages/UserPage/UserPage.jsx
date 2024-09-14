import React, { useEffect, useState } from 'react';
import PathInfo from '../../components/PathInfo/PathInfo';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import SubtitleComponent from 'components/Subtitles/SubtitleComponent/SubtitleComponent';
import Button from 'components/shared/Button/Button';
import styles from './UserPage.module.css';
import UserInfo from 'components/UserInfo/UserInfo';
import TabsList from 'components/TabsList/TabsList';
import ListItems from 'components/ListItems/ListItems';

import { Modal } from 'components/Modal';
import Logout from 'components/Logout/Logout';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/users/userOperation';
import { selectUser } from '../../redux/users/userSelectors';
import Pagination from 'components/Pagination/Pagination';

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(selectUser);
  const [activeTab, setActiveTab] = useState('my-recipes');
  const [, setPageNumber] = useState(1);
  const [dataRecepi] = useState([
    { id: '1', name: 'Recipe 1' },
    { id: '2', name: 'Recipe 2' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOwnProfile = user.id === id;

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id, dispatch]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTabChange = tab => {
    setActiveTab(tab);
    setPageNumber(1);
  };

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div>Помилка: {error}</div>;

  return (
    <div className={styles.userPageWrapper}>
      <PathInfo currentPage='profile' />
      <MainTitle text='Profile' addStyle={styles.userPageMainTitle} />
      <SubtitleComponent className={styles.userPageSubtitle}>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </SubtitleComponent>
      <div className={styles.userWrapper}>
        <div className={styles.userInfoWrapper}>
          <UserInfo user={user} />
          {isOwnProfile ? (
            <Button
              text='Log out'
              classname={styles.userPageButton}
              onClick={handleOpenModal}
            />
          ) : (
            <Button
              text='Follow'
              classname={styles.userPageButton}
              // onClick={}
            />
          )}
        </div>

        <div className={styles.tabsWrapper}>
          <TabsList isOwnProfile={true} onTabChange={handleTabChange} />
          <ListItems activeTab={activeTab} data={dataRecepi} />
          <Pagination />
        </div>
      </div>

      {isModalOpen && (
        <Modal>
          <Logout setModalLogoutOpen={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default UserPage;
