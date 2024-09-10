import sprite from "assets/img/icons/icons.svg";

export default function SvgIcon({ name }) {
  return (
    <svg>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
}
