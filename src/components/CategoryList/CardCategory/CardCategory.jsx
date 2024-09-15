import Image from "components/UI/Image/Image";
import style from "./CardCategory.module.css";
import images from "assets/img/categories";
import { SvgIcon } from "components/UI";

export default function CardCategory({ category, handleSelect }) {

  return (
    <div className={style.card}>
      <Image
        src={images[category.name]}
        alt={`${category.name} category`}
        className={style.cardImg}
      />
      <div className={style.cardActions}>
        <button
          onClick={() => handleSelect(category)}
          className={`${style.titlebutton} ${style.button}`}
        >
          {category.name}
        </button>
        <button
          onClick={() => handleSelect(category)}
          className={`${style.iconbutton}`}
        >
          <SvgIcon name="icon-arrow-up-right" />
        </button>
      </div>
    </div>
  );
}
