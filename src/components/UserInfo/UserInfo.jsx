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

// import Image from "components/UI/Image/Image";
// import style from "./UserInfo.module.css";
// import avatar from "assets/img/avatar";
// import emptyImages from "assets/img/empty";
// import { Link } from "react-router-dom";
// import { SvgIcon } from "components/UI";

// export default function UserInfo({
//   userInfo,
//   profileHeadButton,
//   uploadAvatar = true,
// }) {
//   const useAvatar = avatar[userInfo.avatar] ?? emptyImages["noImage"];
//   const avatarEmpty = avatar[userInfo.avatar] ? false : true;

//   return (
//     <div className={style["profile-head-holder"]}>
//       <div className={style["profile-head"]}>
//         <div className={style["profile-img-holder"]}>
//           <Image
//             src={useAvatar}
//             alt=""
//             className={`${style["user-avatar"]} ${
//               avatarEmpty ? style["no-image"] : ""
//             }`}
//           />
//           <label className={style["upload-avatar"]}>
//             <input type="file" name="avatar" />
//             <SvgIcon name={"icon-plus"} />
//           </label>
//         </div>
//         <h3 className={style["user-login"]}>Nadia</h3>
//         <ul className={style["profile-data"]}>
//           {userInfo.dataList.map((itemInfo, index) => (
//             <li className={style["profile-data-li"]} key={index}>
//               <span className={style["profile-data-li-name"]}>
//                 {itemInfo["name"]}
//               </span>
//               <span className={style["profile-data-li-value"]}>
//                 {itemInfo["value"]}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Link
//         to={profileHeadButton.link}
//         className={style["profile-head-button"]}
//       >
//         {profileHeadButton.name}
//       </Link>
//     </div>
//   );
// }