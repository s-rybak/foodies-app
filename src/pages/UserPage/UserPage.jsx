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
  //selectFollowingUsers,
  selectUser,
} from '../../redux/users/userSelectors';
//import Pagination from 'components/Pagination/Pagination';
import {selectAuthUserId} from '../../redux/auth/authSelectors';
import CustomModal from 'components/shared/CustomModal/CustomModal';
import AnimationLoader from "../../components/Loader/AnimationLoader";

const UserPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(selectUser);

  const loggedInUserId = useSelector(selectAuthUserId);
  const followingUsers = useSelector(selectFollowingUsers);

  const [activeTab, setActiveTab] = useState('my-recipes');
  const [, setPageNumber] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOwnProfile = loggedInUserId === user.id;
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchFollowing({userId: loggedInUserId}));
  }, [id, dispatch, loggedInUserId]);

  useEffect(() => {
    if (followingUsers && followingUsers.users) {
      followingUsers.users.forEach(user => {
        if (user.id === id) {
          setIsFollowing(true);
        }
      });
    }
  }, [followingUsers, id]);

  useEffect(() => {
    if (isOwnProfile) {
      setActiveTab('my-recipes');
    } else {
      setActiveTab('followers');
    }
  }, [isOwnProfile]);
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

  const handleFollowToggle = () => {
    if (isFollowing) {
      dispatch(unfollowUser(user.id));
      setIsFollowing(false);
    } else {
      dispatch(followUser(user.id));
      setIsFollowing(true);
    }
  };

  if (loading) return <AnimationLoader className={styles.pageLoader} />;
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
          <UserInfo user={user} isOwnProfile={isOwnProfile} />
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
          <TabsList isOwnProfile={isOwnProfile} onTabChange={handleTabChange} />
          <ListItems isOwnProfile={isOwnProfile} activeTab={activeTab} userId={id} />
        </div>
      </div>

      {isModalOpen && (
        <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <Logout setModalLogoutOpen={handleCloseModal} />
        </CustomModal>
      )}
    </div>
  );
};

export default UserPage;
