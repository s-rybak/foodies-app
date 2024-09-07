import big_mobile_hero from "../../../assets/img/hero/mobile/hero-image-big.webp";
import big_mogile_hero_2 from "../../../assets/img/hero/mobile/hero-image-big@2x.webp";
import small_mobile_hero from "../../../assets/img/hero/mobile/hero-image-small.webp";
import small_mobile_hero_2 from "../../../assets/img/hero/mobile/hero-image-small@2x.webp";
import big_desktop_hero from "../../../assets/img/hero/all/hero-image-big-tablet_and_desktop.webp";
import big_desktop_hero_2 from "../../../assets/img/hero/all/hero-image-big-tablet_and_desktop@2x.webp";
import small_desktop_hero from "../../../assets/img/hero/all/hero-image-small-tablet_and_desktop.webp";
import small_desktop_hero_2 from "../../../assets/img/hero/all/hero-image-small-tablet_and_desktop@2x.webp";

import css from "./HeroImages.module.css";

function HeroImages() {
	return (
		<ul className={css.component}>
			<li>
				<picture>
					<source
						media="(min-width: 768px)"
						srcSet={`${small_desktop_hero} 1x, ${small_desktop_hero_2} 2x`}
					/>
					<img
						className={css.image_small}
						src={small_mobile_hero}
						srcSet={`${small_mobile_hero} 1x, ${small_mobile_hero_2} 2x`}
						width={77}
						height={70}
						alt="tiramisu in a glass"
					/>
				</picture>
			</li>
			<li>
				<picture>
					<source
						media="(min-width: 768px)"
						srcSet={`${big_desktop_hero} 1x, ${big_desktop_hero_2} 2x`}
					/>
					<img
						className={css.image_big}
						src={big_mobile_hero}
						srcSet={`${big_mobile_hero} 1x, ${big_mogile_hero_2} 2x`}
						width={190}
						height={172}
						alt="wellington on the desk"
					/>
				</picture>
			</li>
		</ul>
	);
}

export default HeroImages;
