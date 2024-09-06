import style from "./Image.module.css";

export default function Image({ src, alt, className }) {
  // Якщо src є масивом, формуємо srcset
  const isArray = Array.isArray(src);
  const srcSet = isArray ? `${src[0]} 1x, ${src[1]} 2x` : undefined;

  return (
    <img
      src={isArray ? src[0] : src} // Використовуємо перше зображення або єдиний src
      srcSet={srcSet}
      alt={alt}
      className={className}
    />
  );
}
