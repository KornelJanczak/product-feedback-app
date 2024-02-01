import Image from "next/image";

interface Data {
  images: {
    mobile?: string;
    tablet?: string;
    desktop: string;
  };
  altText: string;
  width: number;
  height: number;
  pictureClassName?: any | null | undefined;
  imgClassName?: any | null | undefined;
}

const ResponsiveImage = ({
  images,
  altText,
  width,
  height,
  pictureClassName,
  imgClassName,
}: Data) => {
  return (
    <picture className={pictureClassName}>
      <source media="(min-width: 1024px)" srcSet={images.desktop} />
      <source media="(min-width: 768px)" srcSet={images.tablet} />
      <source media="(min-width: 640px)" srcSet={images.mobile} />
      <Image
        src={images.desktop}
        alt={altText}
        width={width}
        height={height}
        className={imgClassName}
        loading="lazy"
      />
    </picture>
  );
};
export default ResponsiveImage;
