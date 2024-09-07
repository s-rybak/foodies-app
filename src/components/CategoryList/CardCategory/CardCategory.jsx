import { Link } from "react-router-dom";
import Image from "components/UI/Image/Image";
import style from "./CardCategory.module.css";
import images from "assets/img/categories";
import { SvgIcon } from "components/UI";

export default function CardCategory({ name }) {
  console.log("images: ", images);

  return (
    <div className={style.card}>
      <Image
        src={images[name]}
        alt={`${name} category`}
        className={style.cardImg}
      />
      <div className={style.cardActions}>
        <Link
          to={`/category/${name}`}
          className={`${style.titlebutton} ${style.button}`}
        >
          {name}
        </Link>
        <Link
          to={`/category/${name}`}
          className={`${style.iconbutton} ${style.button}`}
        >
          <SvgIcon name="icon-arrow-up-right" />
        </Link>
      </div>
    </div>
  );
}
