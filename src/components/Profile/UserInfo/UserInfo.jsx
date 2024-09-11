import Image from "components/UI/Image/Image";
import style from "./UserInfo.module.css";
import avatar from "assets/img/avatar";
import emptyImages from "assets/img/empty";
import { Link } from "react-router-dom";
import { SvgIcon } from "components/UI";

export default function UserInfo({
  userInfo,
  profileHeadButton,
  uploadAvatar = true,
}) {
  const useAvatar = avatar[userInfo.avatar] ?? emptyImages["noImage"];
  const avatarEmpty = avatar[userInfo.avatar] ? false : true;

  return (
    <div className={style["profile-head-holder"]}>
      <div className={style["profile-head"]}>
        <div className={style["profile-img-holder"]}>
          <Image
            src={useAvatar}
            alt=""
            className={`${style["user-avatar"]} ${
              avatarEmpty ? style["no-image"] : ""
            }`}
          />
          <label className={style["upload-avatar"]}>
            <input type="file" name="avatar" />
            <SvgIcon name={"icon-plus"} />
          </label>
        </div>
        <h3 className={style["user-login"]}>Nadia</h3>
        <ul className={style["profile-data"]}>
          {userInfo.dataList.map((itemInfo, index) => (
            <li className={style["profile-data-li"]} key={index}>
              <span className={style["profile-data-li-name"]}>
                {itemInfo["name"]}
              </span>
              <span className={style["profile-data-li-value"]}>
                {itemInfo["value"]}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={profileHeadButton.link}
        className={style["profile-head-button"]}
      >
        {profileHeadButton.name}
      </Link>
    </div>
  );
}
