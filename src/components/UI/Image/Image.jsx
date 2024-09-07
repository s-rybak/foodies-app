export default function Image({ src, alt, className }) {
  const isArray = Array.isArray(src);
  const srcSet = isArray ? `${src[0]} 1x, ${src[1]} 2x` : undefined;

  return (
    <img
      src={isArray ? src[0] : src}
      srcSet={srcSet}
      alt={alt}
      className={className}
    />
  );
}
