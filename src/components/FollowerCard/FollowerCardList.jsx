import FollowerCard from './FollowerCard.jsx';
import styles from './FollowerCard.module.css';
import {followUser, unfollowUser} from "../../redux/users/userOperation";
import {useDispatch} from "react-redux";

const FollowerCardList = ({data}) => {

    const dispatch = useDispatch();

    const handleFollowUser = (id) => {
        dispatch(followUser(id));
    }

    const handleUnfollowUser = (id) => {
        dispatch(unfollowUser(id));
    }

    return (
        <ul className={styles.followerCardList}>
            {data.map(el => (
                <FollowerCard
                    key={el.id}
                    data={el}
                    tab={'followers'}
                    handleFollowUser={handleFollowUser}
                    handleUnfollowUser={handleUnfollowUser}
                />
            ))}
        </ul>
    );
};

export default FollowerCardList;
