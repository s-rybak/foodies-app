import React, { useEffect, useState } from 'react';
import PathInfo from '../../components/PathInfo/PathInfo';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import SubtitleComponent from 'components/Subtitles/SubtitleComponent/SubtitleComponent';
import Button from 'components/shared/Button/Button';
import styles from './UserPage.module.css';
import UserInfo from 'components/UserInfo/UserInfo';
import TabsList from 'components/TabsList/TabsList';
import ListItems from 'components/ListItems/ListItems';

import Logout from 'components/Logout/Logout';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFollowing,
  fetchUser,
  followUser,
  unfollowUser,
} from '../../redux/users/userOperation';
import {
  selectFollowingUsers,
  selectUser,
} from '../../redux/users/userSelectors';
import Pagination from 'components/Pagination/Pagination';
import {
  selectUserId,

} from '../../redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';
import CustomModal from 'components/shared/CustomModal/CustomModal';

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(selectUser);
  const loggedInUserId = useSelector(selectUserId);
  const followingUsers = useSelector(selectFollowingUsers);

  console.log('loggedInUserId', loggedInUserId);
  console.log('id', id);
  console.log('user', user);

  const [activeTab, setActiveTab] = useState('my-recipes');
  const [, setPageNumber] = useState(1);

  const [dataRecepi] = useState([
    { id: '1', name: 'Recipe 1' },
    { id: '2', name: 'Recipe 2' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isOwnProfile = loggedInUserId === user.id;
  const isFollowing = followingUsers.includes(user.id);



  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchFollowing(loggedInUserId));
  }, [id, dispatch, loggedInUserId]);

  const handleOpenModal = () => {
    console.log('click on logout');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('click on close');
    setIsModalOpen(false);
  };

  const handleTabChange = tab => {
    setActiveTab(tab);
    setPageNumber(1);
  };

  const handleFollowToggle = () => {
    if (isFollowing) {
      dispatch(unfollowUser(user.id)); 
    } else {
      dispatch(followUser(user.id)); 
    }
  };


  if (loading) return <Loader />;
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
              text={isFollowing ? 'Following' : 'Follow'}
              classname={styles.userPageButton}
              onClick={handleFollowToggle}
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
        <CustomModal isOpen={true} onClose={handleCloseModal}>
          <Logout setModalLogoutOpen={handleCloseModal} />
        </CustomModal>
      )}
    </div>
  );
};

export default UserPage;
