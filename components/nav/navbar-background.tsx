import ResponsiveImage from "../responsive-image";
import { ReactNode } from "react";

export default function NavBarBackground({
  className,
  mobileSidebar,
}: {
  className?: string;
  mobileSidebar: ReactNode;
}) {
  return (
    <div className={className}>
      <ResponsiveImage
        images={{
          desktop: "/assets/suggestions/desktop/background-header.png",
          mobile: "/assets/suggestions/mobile/background-header.png",
          tablet: "/assets/suggestions/tablet/background-header.png",
        }}
        pictureClassName="w-full md:h-16 md:w-full md:rounded-lg lg:h-36"
        imgClassName="w-full h-16 md:h-44 md:w-full md:rounded-lg lg:h-36"
        altText="Gradient image"
        width={340}
        height={72}
      />
      <div
        className="px-5 z-10 absolute
      top-0 pt-4 flex 
      w-full
      justify-between mx-auto my-0 
      md:bottom-0 md:instet-x-auto md:inset-y-1/2
      md:w-full
      md:flex-col
      "
      >
        <h2 className="text-lg font-bold text-basicWhite md:text-xl lg:text-center">
          Feedback Product
        </h2>

        {mobileSidebar}
      </div>
    </div>
  );
}
