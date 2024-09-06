import cx from "classnames";
import icons from '../../../assets/img/icons.svg';

const Icon = ({ iconId, width = "16", height = "16", stroke = "#000", customStyle = "" }) => {
  return (
    <>
      {iconId && (
        <svg
          className={cx(customStyle)}
          width={width}
          height={height}
          stroke={stroke}
          aria-hidden="true"
        >
          <use href={`${icons}#${iconId}`} />
        </svg>
      )}
    </>
  );
};

export default Icon;
