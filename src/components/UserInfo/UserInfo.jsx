import Image from "components/UI/Image/Image";
import style from "./UserInfo.module.css";
import emptyImages from "../../assets/img/empty";
import {SvgIcon} from "components/UI";
import {useDispatch} from "react-redux";
import {uploadAvatar} from "../../redux/users/userOperation";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";


const UserInfo = ({user}) => {
    const dispatch = useDispatch();

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(uploadAvatar(file));
        }
    };

    return (
        <div className={style["profile-head-holder"]}>
            <div className={style["profile-head"]}>
                <div className={style["profile-img-holder"]}>
                    <Image
                        src={user.avatar ? (user.avatar.startsWith("http") ? user.avatar : `${BASE_URL}${user.avatar}`) : emptyImages.noImage}
                        alt=""
                        className={`${style["user-avatar"]} ${
                            emptyImages ? style["no-image"] : ""
                        }`}
                    />
                    <label className={style["upload-avatar"]}>
                        <input type="file" name="avatar" onChange={handleAvatarChange}/>
                        <SvgIcon name={"icon-plus"}/>
                    </label>
                </div>
                <h3 className={style["user-login"]}>{user.name}</h3>
                <ul className={style["profile-data"]}>
                    <li className={style["profile-data-li"]}>
                        <span className={style["profile-data-li-name"]}>Email:</span>
                        <span className={style["profile-data-li-value"]}>{user.email}</span>
                    </li>
                    <li className={style["profile-data-li"]}>
                        <span className={style["profile-data-li-name"]}>Recipes:</span>
                        <span className={style["profile-data-li-value"]}>
              {user.createRecipeCount}
            </span>
                    </li>
                    <li className={style["profile-data-li"]}>
                        <span className={style["profile-data-li-name"]}>Favorites:</span>
                        <span className={style["profile-data-li-value"]}>
              {user.countFavouriteRecipe}
            </span>
                    </li>
                    <li className={style["profile-data-li"]}>
                        <span className={style["profile-data-li-name"]}>Followers:</span>
                        <span className={style["profile-data-li-value"]}>
              {user.followersUserCount}
            </span>
                    </li>
                    <li className={style["profile-data-li"]}>
                        <span className={style["profile-data-li-name"]}>Following:</span>
                        <span className={style["profile-data-li-value"]}>
              {user.followingUsersCount}
            </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserInfo;
