import css from "./RecipeAuthor.module.css";

function RecipeAuthor({
	authorPhotoStandard,
	authorPhotoRetina,
	authorName,
	authorId,
}) {
	return (
		<button className={css.button}>
			<img
				className={css.photo}
				src={authorPhotoStandard || authorPhotoRetina}
				srcSet={`${authorPhotoStandard} 1x, ${authorPhotoRetina} 2x`}
				alt={authorName}
				width={32}
				height={32}
			/>
			<span className={css.labels}>
				<span className={css.label}>Created by:</span>
				<span className={css.name}>{authorName}</span>
			</span>
		</button>
	);
}

export default RecipeAuthor;
